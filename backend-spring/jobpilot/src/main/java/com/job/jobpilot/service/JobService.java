package com.job.jobpilot.service;

import com.job.jobpilot.dto.request.JobRequest;
import com.job.jobpilot.dto.request.JobUpdateRequest;

public interface JobService {

    void createJob(JobRequest jobRequest);
    void updateJob(long jid, JobUpdateRequest jobUpdaterequest);
    void deleteJob(long jid);

}