import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs = [
    {
      id: '12345',
      userOwner: 'Chonticha Uds',
      name: 'Job2',
      jobStatus: 'เปิดรับคนอยู่',
      address: 'แยกลงหาดบางแสน',
      price: 200,
      jobType: 'บาท/วัน',
      worker: ['a', 'b', 'c', 'd'], // person
      genderCondition: 'ชาย',
      beginAge: 18,
      endAge: 40,
      workerAmount: 10,
      description: 'สิ่งประดิษฐ์จากวัสดุเหลือใช้. กำไลข้อมือ กระดาษแข็ง หุ้มด้วยไหมพรม',
      createDate: new Date(2018, 10, 27),
      startDate: new Date(2018, 10, 27),
      endDate: new Date(2018, 10, 27),

    },
    {
      id: '6789',
      userOwner: 'Chonticha Uds',
      name: 'Job2',
      jobStatus: 'ไม่รับคนแล้ว',
      address: 'แยกลงหาดบางแสน',
      price: 200,
      jobType: 'บาท/วัน',
      worker: ['a', 'b', 'c', 'd'], // person
      genderCondition: 'ไม่ระบุ',
      beginAge: 18,
      endAge: 40,
      workerAmount: 10,
      description: 'สิ่งประดิษฐ์จากวัสดุเหลือใช้. กำไลข้อมือ กระดาษแข็ง หุ้มด้วยไหมพรม',
      createDate: new Date(2561, 10, 27),
      startDate: new Date(2561, 10, 27),
      endDate: new Date(2561, 10, 27),
    },
  ];
  constructor() { }

  getJobs() {
    return this.jobs;
  }

  getJobById(id: string) {
    return this.jobs.find((job) => {
      return job.id === id;
    });
  }

  addJob(data) {
    this.jobs.push(data);
  }
}
