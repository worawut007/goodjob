// import { Injectable } from '@angular/core';
//  import { AccountServices, IAccount } from '../services/account.services';

// // import { IMembersSearch, IMember } from '../components/members/members.interface';

// @Injectable()

// export class MemberService {
//     constructor(private account: AccountServices) {
//         if (this.account.mockUserItems.length <= 3) {
//             this.generateMebers();
//         }
//     }
// //     // ดึงข้อมูลสมาชิกทั้งหมด
// //     getMembers(options?: IMembersSearch) {
// //         return new Promise<IMember>((resolve, reject) => {

// //             // เรียงข้อมูลใหม่ จากวันที่แก้ไขล่าสุด
// //             let items = this.account.mockUserItems.sort((a1, a2) => {
// //                 return Date.parse(a2.updated.toString()) - Date.parse(a1.updated.toString());
// //             });

// //             // คำนวณเรื่อง pagination
// //             const startItem = (options.startPage - 1) * options.limitPage;
// //             const endItem = options.startPage * options.limitPage;


// //             // หากมีการค้นหาข้อมูล
// //             if (options && options.searchText && options.searchType) {
// //                 // ค้นหาข้อมูลมาเก็บไว้ในตัวแปร
// //                 items = this.account
// //                     .mockUserItems
// //                     .filter( items =>
// //                         items[options.searchType].toString().toLowerCase()
// //                             .indexOf(options.searchText.toString().toLowerCase()) >= 0
// //                     );
// //             }
// //             resolve({ items: items.slice(startItem, endItem), totalItems: items.length });
// //         });
// //     }

//     // ดึงข้อมูุลสมาชิกแค่คนเดียว
//     getMemberByid(id) {
//         return new Promise<IAccount>((resolve, reject) => {
//             const member = this.account.mockUserItems.find(item => item.id === id);
//             if (!member) {
//                 return reject({ Message: 'ไม่มีข้อมูลสมาชิกในระบบ' });
//             }
//             resolve(member);
//         })
//     }

// //     //  เพิ่มข้อมูลสมาชิก
// //     createMember(model: IAccount) {
// //         return new Promise<IAccount>((resolve, reject) => {
// //             if (this.account.mockUserItems.find(item => item.email === model.email)) {
// //                 return reject({ Message: 'อีเมล์นี้มีในระบบแล้ว' });
// //             }
// //             model.id = Math.random();
// //             model.created = new Date();
// //             model.updated = new Date();
// //             this.account.mockUserItems.push(model);
// //             resolve(model);
// //         });
// //     }

// //     // ลบข้อมูลสมาชิก
// //     deleteMember(id: any) {
// //         return new Promise((resolve, reject) => {
// //             const findIndex = this.account.mockUserItems.findIndex(item => item.id === id);
// //             if (findIndex < 0) { return reject({ Message: 'ไม่มีข้อมูลในระบบ' }); }
// //             resolve(this.account.mockUserItems.splice(findIndex, 1));
// //         });
// //     }

// //     // แก้ไขสมาชิก
// //     updateMember(id: any, model: IAccount) {
// //         return new Promise<IAccount>((resolve, reject) => {
// //             const member = this.account.mockUserItems.find(item => item.id === id);
// //             if (!member) {return reject({ Message: 'ไม่มีข้อมูลสมาชิกในระบบ' }); }
// //             // ตรวจสอบว่ามีอีเมลนี้มีในระบบหรือยัง
// //             if ( this.account.mockUserItems.find(item => {
// //                 return item.email === model.email && model.email !== member.email;
// //             })) {return reject({ Message: 'มี e-mail นี้อยู่ในระบบแล้ว' }); }

// //             member.email = model.email;
// //             member.password = model.password || member.password; // หากไม่กรอก password ก็ใช้ตัวเดิม
// //             member.firstname = model.firstname;
// //             member.lastname = model.lastname;
// //             member.position = model.position;
// //             member.role = model.role;
// //             member.image = model.image;
// //             member.updated = new Date();
// //             resolve(member);
// //         })
// //     }


// //     //  จำลองข้อมูลสมาชิก เพื่อทำ paginatiton
// //     private generateMebers() {
// //         const positions = ['Frontend Developer', 'Backend Deaveloper'];
// //         const roles = [IRoleAccount.Member, IRoleAccount.Admin, IRoleAccount.Employee];
// //         // this.account.mockUserItems.splice(3);
// //         for (let i = 4; i <= 334; i++) {
// //             this.account.mockUserItems.push({
// //                 id: i.toString(),
// //                 firstname: `Fristname ${i}`,
// //                 lastname: `Lastname ${i}`,
// //                 email: `mail-${i}@mail.com`,
// //                 password: `123456`,
// //                 position: positions[Math.round(Math.random() * 1)],
// //                 role: roles[Math.round(Math.random() * 2)],
// //                 created: new Date(),
// //                 updated: new Date()

// //             })
// //         }
// //     }
//  }
