import { Amplify } from "aws-amplify";
import { awsconfig } from "../../awsconfig";

export const configureAmplify = () => {
    Amplify.configure({
        API: {
            GraphQL: {
                endpoint: awsconfig.aws_appsync_graphqlEndpoint,
                region: awsconfig.aws_appsync_region,
                defaultAuthMode: 'apiKey',
                apiKey: awsconfig.aws_appsync_apiKey,
            },
        },
    });
}