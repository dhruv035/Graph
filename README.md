A simple typescript express server that uses graphclient to query the subgraph and return results

Steps to run

Add a .env file to the project and plug an API key from the graph exlorer, an example can be seen in .env.example

Build the project with the following command: npm run build

Start the server locally with the following command: npm run start

To update queries change the queries in the queries.graphql file and to change the sources add them to .graphclientrc.yaml file and run the command: npm run graph-build
