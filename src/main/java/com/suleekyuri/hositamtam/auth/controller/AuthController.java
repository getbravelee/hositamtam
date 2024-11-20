package com.suleekyuri.hositamtam.auth.controller;

import com.suleekyuri.hositamtam.auth.dto.JoinDto;
import com.suleekyuri.hositamtam.auth.dto.LoginDto;
import com.suleekyuri.hositamtam.jwt.JwtProvider;
import com.suleekyuri.hositamtam.user.User;
import com.suleekyuri.hositamtam.user.service.UserService;
import com.suleekyuri.hositamtam.shared.CMRespDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:8080")
@Slf4j
@Tag(name = "AUTH 컨트롤러", description = "회원가입, 로그인")
public class AuthController {

    private final UserService userService;


    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    // 회원가입 처리
    @Operation(summary = "회원가입", description = "회원가입 진행합니다")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "회원가입 성공", content = @Content(mediaType = "application/json", schema = @Schema(implementation = CMRespDto.class))),
            @ApiResponse(responseCode = "500", description = "서버 에러", content = @Content(mediaType = "application/json"))
    })
    @PostMapping("/register")
    public ResponseEntity<CMRespDto<?>> registerUser(@RequestBody JoinDto joinDto) {
        try {
            // DTO를 User 엔티티로 변환
            User user = joinDto.toEntity();
            log.info("회원가입 아이디: {}", user.getUserLoginId());

            // 사용자 등록
            userService.registerUser(user);

            // 성공 응답 반환 (HTTP 200)
            CMRespDto<?> response = new CMRespDto<>(1, "회원가입 성공", "회원가입이 완료되었습니다.");
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            // 실패 응답 반환 (HTTP 400 - Bad Request)
            CMRespDto<?> response = new CMRespDto<>(-1, "회원가입 실패", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            log.error("회원가입 실패", e);
            // 실패 응답 반환 (HTTP 500)
            CMRespDto<?> response = new CMRespDto<>(-1, "회원가입 실패", "서버 오류가 발생했습니다.");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    // 로그인 처리
    @Operation(summary = "로그인", description = "로그인 진행합니다")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "로그인 성공"),
            @ApiResponse(responseCode = "401", description = "로그인 실패")
    })
    @PostMapping("/login")
    public CMRespDto<?> login(@RequestBody LoginDto loginDto) {
        try {
            // 로그인 비즈니스 로직 서비스에 위임
            String token = userService.loginUser(loginDto);

            // 성공 응답 반환 (200 OK, 토큰 포함)
            return new CMRespDto<>(1, "로그인 성공", token);
        } catch (Exception e) {
            log.error("로그인 실패", e);
            // 실패 응답 반환 (HTTP 401)
            return new CMRespDto<>(-1, "로그인 실패", e.getMessage());
        }
    }
}