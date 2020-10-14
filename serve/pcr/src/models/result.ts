import { ResultStatus, CommonResult } from './common';

export class Result {
  static success<T>(data: T): CommonResult<T> {
    return {
      code: ResultStatus.success,
      data,
      msg: '',
    };
  }

  static fail(msg: string): CommonResult<string> {
    return {
      code: ResultStatus.fail,
      data: null,
      msg,
    };
  }

  static unAuth(): CommonResult<string> {
    return {
      code: ResultStatus.unAuth,
      data: null,
      msg: '未登录',
    };
  }
}
