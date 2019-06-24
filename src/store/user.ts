import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';

@Module({
  namespaced: true,
  name: 'user',
})
export class UserModule extends VuexModule {
  userCount: number = 10;

  get userCountMulti() {
    return this.userCount * 2;
  }

  @Mutation
  addUser(n: number = 1) {
    this.userCount += n;
  }

  @Action
  fetchUser(n: number = 20) {
    // no strong type here
    this.context.commit('addUser', n);
  }
}
