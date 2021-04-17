// $(function() {
// 	// 用户名输入框的校验
// 	// 当输入框获取焦点时
// 	$("#inputUsername").focus(function() {
// 		// 隐藏X
// 		$("#username-tag").addClass("hidden");
// 		// 移除has-error样式
// 		$(".username-area").removeClass("has-error");
// 		// 清空输入框的内容
// 		$("#inputUsername").val("");
// 	});
// 	// 当输入框失去焦点时
// 	$("#inputUsername").blur(function() {
// 		// 如果输入框内容为空
// 		if ($("#inputUsername").val().length == 0) {
// 			// 输入框添加样式has-error
// 			$(".username-area").addClass("has-error");
// 			// 显示X
// 			$("#username-tag").removeClass("hidden");
// 			// 改变输入框的内容
// 			$("#inputUsername").val("用户名不能为空");
// 			return false;
// 		} else {
// 			// 校验通过，隐藏X
// 			$("#username-tag").addClass("hidden");
// 		}
// 	});

// 	// 密码输入框的校验
// 	// 当输入框获取焦点时
// 	$("#inputPassword").focus(function() {
// 		// 隐藏X
// 		$("#password-tag").addClass("hidden");
// 		// 移除has-error样式
// 		$(".password-area").removeClass("has-error");
// 		// 清空输入框的内容
// 		$("#inputPassword").val("");
// 		// 输入框type属性为password
// 		$("#inputPassword").attr("type", "password");
// 	});
// 	// 当输入框失去焦点时
// 	$("#inputPassword").blur(function() {
// 		// 如果输入框内容为空
// 		if ($("#inputPassword").val().length == 0) {
// 			// 输入框添加样式has-error
// 			$(".password-area").addClass("has-error");
// 			// 显示X
// 			$("#password-tag").removeClass("hidden");
// 			//输入框type属性为text
// 			$("#inputPassword").attr("type", "text");
// 			// 改变输入框的内容
// 			$("#inputPassword").val("密码不能为空");
// 			return false;
// 		} else {
// 			// 校验通过，隐藏X
// 			$("#password-tag").addClass("hidden");
// 		}
// 	});

// 	// 
// 	// 注册时用户名的校验
// 	// 当输入框获取焦点时
// 	$("#register-username").focus(function() {
// 		// 隐藏X
// 		$("#register-username-tag").addClass("hidden");
// 		// 移除has-error样式
// 		$(".register-username-area").removeClass("has-error");
// 		// 清空输入框的内容
// 		$("#register-username").val("");
// 	});
// 	$("#register-username").blur(function() {
// 		// 如果输入框内容为空
// 		if ($("#register-username").val().length != 0) {
// 			var username = $("#register-username").val();
// 			if (username.trim().length < 6 || username.trim().length > 18) {
// 				$("#register-username").val("用户名有误");
// 				$(".register-username-area").addClass("has-error");
// 				$("#register-username-tag").removeClass("hidden");
// 			} else {
// 				$(".register-username-area").removeClass("has-error");
// 				$("#register-username-tag").addClass("hidden");
// 			}
// 		} else {
// 			// 校验通过，隐藏X
// 			$("#register-username").val("用户名不能为空");
// 			$(".register-username-area").addClass("has-error");
// 			$("#register-username-tag").removeClass("hidden");

// 		}
// 	});
// 	// 注册时密码的校验
// 	// 当输入框获取焦点时
// 	$("#register-password").focus(function() {
// 		// 隐藏X
// 		$("#register-password-tag").addClass("hidden");
// 		// 移除has-error样式
// 		$(".register-password-area").removeClass("has-error");
// 		// 清空输入框的内容
// 		$("#register-password").val("");
// 		$("#register-password").attr("type", "password");
// 	});
// 	$("#register-password").blur(function() {
// 		// 如果输入框内容为空
// 		if ($("#register-password").val().length != 0) {
// 			var password = $("#register-password").val();
// 			if (password.trim().length < 6 || password.trim().length > 18) {
// 				$("#register-password").val("密码有误");
// 				$(".register-password-area").addClass("has-error");
// 				$("#register-password-tag").removeClass("hidden");
// 				//输入框type属性为text
// 				$("#register-password").attr("type", "text");
// 			} else {
// 				$(".register-password-area").removeClass("has-error");
// 				$("#register-password-tag").addClass("hidden");
// 				$("#register-password").attr("type", "password");
// 			}
// 		} else {
// 			// 校验通过，隐藏X
// 			$("#register-password").val("密码不能为空");
// 			$(".register-password-area").addClass("has-error");
// 			$("#register-password-tag").removeClass("hidden");
// 			//输入框type属性为text
// 			$("#register-password").attr("type", "text");

// 		}
// 	});
// 	// 注册时确认密码的校验
// 	// 当输入框获取焦点时
// 	$("#register-repeatPassword").focus(function() {
// 		// 隐藏X
// 		$("#register-repeatPassword-tag").addClass("hidden");
// 		// 移除has-error样式
// 		$(".register-repeatPassword-area").removeClass("has-error");
// 		// 清空输入框的内容
// 		$("#register-repeatPassword").val("");
// 		$("#register-repeatPassword").attr("type", "password");
// 	});
// 	$("#register-repeatPassword").blur(function() {
// 		// 如果输入框内容为空
// 		if ($("#register-repeatPassword").val().length != 0) {
// 			var password = $("#register-password").val();
// 			var repeatPassword = $("#register-repeatPassword").val();
// 			if (password != repeatPassword) {
// 				$("#register-repeatPassword").val("两次输入的密码不一致");
// 				$(".register-repeatPassword-area").addClass("has-error");
// 				$("#register-repeatPassword-tag").removeClass("hidden");
// 				//输入框type属性为text
// 				$("#register-repeatPassword").attr("type", "text");
// 			}
// 		} else {
// 			// 校验通过，隐藏X
// 			$("#register-repeatPassword").val("密码不能为空");
// 			$(".register-repeatPassword-area").addClass("has-error");
// 			$("#register-repeatPassword-tag").removeClass("hidden");
// 			//输入框type属性为text
// 			$("#register-repeatPassword").attr("type", "text");

// 		}
// 	});
// 	// 
// 	// 注册时手机号的校验
// 	// 当输入框获取焦点时
// 	$("#register-photo").focus(function() {
// 		// 隐藏X
// 		$("#register-photo-tag").addClass("hidden");
// 		// 移除has-error样式
// 		$(".register-photo-area").removeClass("has-error");
// 		// 清空输入框的内容
// 		$("#register-photo").val("");
// 	});
// 	$("#register-photo").blur(function() {
// 		// 如果输入框内容为空
// 		if ($("#register-photo").val().length != 0) {
// 			var photo = $("#register-photo").val();
// 			if (photo.trim().length != 11) {
// 				$("#register-photo").val("手机号有误");
// 				$(".register-photo-area").addClass("has-error");
// 				$("#register-photo-tag").removeClass("hidden");
// 			} else {
// 				$(".register-photo-area").removeClass("has-error");
// 				$("#register-photo-tag").addClass("hidden");
// 			}
// 		} else {
// 			// 校验通过，隐藏X
// 			$("#register-photo").val("手机号不能为空");
// 			$(".register-photo-area").addClass("has-error");
// 			$("#register-photo-tag").removeClass("hidden");

// 		}
// 	});
// 	//
// 	// 注册时邮箱的校验
// 	// 当输入框获取焦点时
// 	$("#register-email").focus(function() {
// 		// 隐藏X
// 		$("#register-email-tag").addClass("hidden");
// 		// 移除has-error样式
// 		$(".register-email-area").removeClass("has-error");
// 		// 清空输入框的内容
// 		$("#register-email").val("");
// 	});
// 	$("#register-email").blur(function() {
// 		// 如果输入框内容为空
// 		if ($("#register-email").val().length != 0) {
// 			var email = $("#register-email").val();
// 			if (email.trim().length < 7) {
// 				$("#register-email").val("邮箱有误");
// 				$(".register-email-area").addClass("has-error");
// 				$("#register-email-tag").removeClass("hidden");
// 			} else {
// 				$(".register-email-area").removeClass("has-error");
// 				$("#register-email-tag").addClass("hidden");
// 			}
// 		} else {
// 			// 校验通过，隐藏X
// 			$("#register-email").val("邮箱不能为空");
// 			$(".register-email-area").addClass("has-error");
// 			$("#register-email-tag").removeClass("hidden");

// 		}
// 	});
// 	var flag = false;
// 	$('.slide-group>li').click(function() {
// 		if (flag) {
// 			$(this).children("a").children("span").removeClass('glyphicon glyphicon-chevron-down');
// 			$(this).children("a").children("span").addClass('glyphicon glyphicon-chevron-right');
// 			flag = false;
// 		} else {
// 			$(this).children("a").children("span").addClass('glyphicon glyphicon-chevron-down');
// 			flag = true;
// 		}
// 	});

// });

// function loginCheck() {
// 	if ($("#inputUsername").val().length == 0) {
// 		alert("用户名不能为空");
// 		$("#inputUsername").focus();
// 		return false;
// 	}
// 	if ($("#inputPassword").val().length == 0) {
// 		alert("密码不能为空");
// 		$("#inputPassword").focus();
// 		return false;
// 	}
// }

// function registerCheck() {
// 	if ($("#register-username").val().length == 0) {
// 		alert("用户名不能为空");
// 		$("#register-username").focus();
// 		return false;
// 	}
// 	if ($("#register-password").val().length == 0) {
// 		alert("密码不能为空");
// 		$("#register-password").focus();
// 		return false;
// 	}
// 	if ($("#register-photo").val().length == 0) {
// 		alert("手机号不能为空");
// 		$("#register-photo").focus();
// 		return false;
// 	}
// 	if ($("#register-email").val().length == 0) {
// 		alert("邮箱不能为空");
// 		$("#register-email").focus();
// 		return false;
// 	}
// }
