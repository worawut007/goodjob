import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})

export class AccountServices { // service นี้คือ Globalservice

    public mockUserItems: IAccount[] = [
        {
            id: 1,
            firstname: 'Worawut',
            lastname: 'sangangam',
            email: 'boyjam1@hotmail.com',
            password: '123456',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
            birthdate: new Date('2015-03-25'),
            address: 'บ้าน',
            created: new Date(),
            updated: new Date()
        },
        {
            id: 2,
            firstname: 'Worawut',
            lastname: 'sangangam',
            email: 'boyjam2@hotmail.com',
            password: '123456',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
            birthdate: new Date('2015-03-25'),
            address: 'บ้าน',
            created: new Date(),
            updated: new Date()
        },
        {
            id: 3,
            firstname: 'Worawut',
            lastname: 'sangangam',
            email: 'boyjam3@hotmail.com',
            password: '123456',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
            birthdate: new Date('2015-03-25'),
            address: 'บ้าน',
            created: new Date(),
            updated: new Date()
        },
    ];

    // เปลี่ยนรหัสผ่านใหม่
    // onChangePassword(accessToken: string, model: IChangePassword) {
    //     return new Promise((resolve, reject) => {
    //         const userProfile = this.mockUserItems.find(item => item.id == accessToken);
    //         if (!userProfile) return reject({ Message: 'ไม่มีข้อมูลผู้ใช้งาน' });
    //         if (userProfile.password != model.old_pass) return reject({ Message: 'รหัสผ่านเดิมไม่ถูกต้อง' });
    //         userProfile.password = model.new_pass;
    //         userProfile.updated = new Date();
    //         resolve(userProfile);
    //     })
    // }


    // แก้ไขข้อมูลส่วนตัว Update Profile
    // onUPdateProfile(accessToken: string, model: IProfile) {
    //     return new Promise((resolve, reject) => {
    //         const userProfile = this.mockUserItems.find(user => user.id == accessToken);
    //         if (!userProfile) return reject({ Message: 'ไม่มีผู้ใช้ในระบบ' });
    //         userProfile.firstname = model.firstname;
    //         userProfile.lastname = model.lastname;
    //         userProfile.position = model.position;
    //         userProfile.image = model.image;
    //         userProfile.updated = new Date();
    //         resolve(userProfile);
    //     })

    // }

    // ดึงข้อมูลผู้ที่เข้าสู่ระบบจาก token

    getUserLogin(accessToken: string) {
        return new Promise<IAccount>((resolve, reject) => {
            const userLogin = this.mockUserItems.find(m => m.id === accessToken);
            if (!userLogin) { return reject({ Message: 'access Token ไม่ถูกต้อง' }); }
            resolve(userLogin);
        });
    }


    // เข้าสู่ระบบ
    onLogin(model: ILogin) {
        return new Promise<{ accessToken: string }>((resolve, reject) => {
            const userLogin = this.mockUserItems.find(item => item.email === model.email && item.password === model.password);
            if (!userLogin) { return reject({ Message: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง' }); }
            resolve({
                accessToken: userLogin.id
            });
        });
    }

    // ลงทะเบียน
    // onRegister(model: IRegister) {
    //     return new Promise((resolve, reject) => {
    //         model['id'] = Math.random();
    //         this.mockUserItems.push(model);
    //         resolve(model);
    //     })
    // }
}
export interface IAccount {
    firstname: string;
    lastname: string;
    birthdate: Date;
    email: string;
    password: string;
    address: string;
    id: any;
    image: string;
    created: Date;
    updated: Date;
}
export interface ILogin {
    email: string;
    password: string;

}
