import { ApolloLink } from "apollo-link";

export default class MutableLink extends ApolloLink {
  public link: ApolloLink | null;
  constructor(link?: ApolloLink | null) {
    super((...args) => {
      if (!this.link) return null;
      return this.link.request(...args);
    });
    this.link = link || null;
  }
}
