import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getGretting(): string {
    return 'Good Evening';
  }
}

// export class CountService {
//   let count = 1
//   setTimeout(() => {
//     count += 1
//     console.log(count);

//   }, 1000)
// }
