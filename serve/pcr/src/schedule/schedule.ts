import schedule from 'node-schedule';
import { checkDbVersion } from '../db/dbHelper';
import { ClanBattleBoss } from '../entity/postgres/ClanBattleBoss';

/// 每天5点检查是否有更新
function updateDbSchedule(): void {
  const rule = new schedule.RecurrenceRule();
  rule.hour = 5;
  rule.second = 10;
  checkDbVersion();
  const j = schedule.scheduleJob(rule, () => {
    console.log('check');
    // checkDbVersion();
  });
}
// TODO 每月 15 号清空公会战数据
function clearClanBattle(): void {
  const rule = new schedule.RecurrenceRule();
  rule.date = 14;
  rule.hour = 5;
  // ClanBattleBoss.clear();
  const j = schedule.scheduleJob(rule, () => {
    console.log('clear');
    // ClanBattleBoss.clear();
  });
}

export function initSchedule(): void {
  console.log('init');
  clearClanBattle();
  updateDbSchedule();
}
