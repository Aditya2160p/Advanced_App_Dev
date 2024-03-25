package com.job.jobpilot.service;

import com.job.jobpilot.dto.request.UserRequest;
import com.job.jobpilot.dto.request.UserUpdateRequest;

public interface UserService {
void createUser(UserRequest userRequest);
void updateUser(long userUid, UserUpdateRequest userUpdateRequest);
void deleteUser(long userUid);
}
