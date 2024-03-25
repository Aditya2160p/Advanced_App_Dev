// package com.job.jobpilot.service.impl;

// import org.springframework.stereotype.Service;

// import com.job.jobpilot.dto.request.JobRequest;
// import com.job.jobpilot.model.Job;
// import com.job.jobpilot.repository.JobRepo;
// import com.job.jobpilot.service.JobService;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// @SuppressWarnings("null")
// public class JobServiceImpl implements JobService{
//     private final JobRepo jobRepo;

//     @Override
//     public void createJob(JobRequest jobRequest){
//         Job job=new Job();
//         job.setJobname(jobRequest.getJobname());
//         job.setDescription(jobRequest.getDescription());
//         job.setSalary(jobRequest.getSalary());
//         jobRepo.save(job);
//     }
//     @Override
//     public void deleteJob(long jobid){
//         jobRepo.deleteById(jobid);
//     }
// }
