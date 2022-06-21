import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8kpfw18ot01xm1lcm598l/master',
  cache: new InMemoryCache()
});