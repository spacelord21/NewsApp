export type TUser = {
  id: number;
  username: string;
  avatar_url: string;
  tokens: TUserTokens;
};

export type TUserTokens = {
  accessToken: string;
  uid: string;
  client: string;
};
