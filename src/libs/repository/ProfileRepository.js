import { Repository } from "./Repository";

export class ProfileRepository {
  constructor() {
    this.repository = new Repository("UsersFullProfiles");
  }

  /**
   *
   * @param {User} user
   */
  save(user) {
    this.repository.add(user);
  }

  list() {
    return this.repository.list();
  }

  findUser({
    days,
    gameMap,
    gameStyle,
    // kd,
    lang,
    mic,
    mode,
    platform,
    time,
    timeZone,
  }) {
    return this.repository.get(
      (item) =>
        item.days === days &&
        item.gameMap === gameMap &&
        (item.gameStyle === gameStyle || !!gameStyle) &&      
        // (item.kd > kd[0] && item.kd < kd[1]) &&
        (item.lang === lang || !!lang) &&
        item.mic === mic &&
        (item.mode === mode || !!mode) &&
        item.platform === platform &&
        item.time === time &&
        item.timeZone === timeZone
    );
  }

  // findUser({
  //   days,
  //   gameMap,
  //   gameStyle,
  //   // kd,
  //   lang,
  //   mic,
  //   mode,
  //   platform,
  //   time,
  //   timeZone,
  // }) {
  //   return this.repository.get(
  //     (item) =>
  //       item.days === days &&
  //       item.gameMap === gameMap &&
  //       item.gameStyle === gameStyle &&
  //       // item.kd === kd &&
  //       item.lang === lang &&
  //       item.mic === mic &&
  //       item.mode === mode &&
  //       item.platform === platform &&
  //       item.time === time &&
  //       item.timeZone === timeZone
  //   );
  // }

  /**
   *
   * @param {string} email
   */
  delete(gamebuddyUsername) {
    this.repository.delete((x) => x.gamebuddyUsername !== gamebuddyUsername);
  }

  // NOT IN USE FOR NOW!!!!!!!!!!!!!!!!!!!!

  // /**
  //  *
  //  * @param {string} email
  //  * @return {User} user
  //  */
  // findByEmail(email) {
  //   this.repository.findOne((x) => x.emailAddress === email);
  // }
}
