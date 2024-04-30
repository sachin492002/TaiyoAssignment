import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://disease.sh/v3/covid-19/' ,
    }),
    endpoints: (builder) => ({
        getCovidData: builder.query({ query: () => 'all?lastdays=all' }),

    }),
});

export const {
    useGetCovidDataQuery,
} = Api;
