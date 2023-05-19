import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): { id: number; username: string }[] {
    return [
      { id: 1, username: 'sherly' },
      { id: 2, username: 'watson' },
    ];
  }
}
