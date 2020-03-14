# Recited App

This is an API that I have built that allows me to send a url of an article or blog post to the Recited Core API and it will synthesize the webpage text and output an mp3 file of article. I have made use of the goolge cloud text-speech-api in order to achieve this aim.


### Getting Started

In order to get this API running you will need to clone or download the repo and run:

````bash
npm install 
````

Once all the dependencies have been installed, you will need to configure the service account with google cloud text-to-speech API. Follow the instructions set out on google clouds documents: https://cloud.google.com/text-to-speech/docs/quickstart-protocol.

Once you have you project-id and service account json file from google cloud text-to-speech API, save them in your project folder. These details are private, and should never be shared with anyone or on a public platform. 

Create a folder called 'service-accounts' in the root of your project and place the json folder in this folder. Ensure that you add this folder to the .gitignore file.

Now you can instantiate an instance of the text-to-speech API like this:

````javascript
const client = new textToSpeech.TextToSpeechClient({
   projectId: 'example-project-name', 
   keyFilename: './service-accounts/example-project-name-xxxxxxx.json'
});
````

Once your credentials are loaded in, you can start the API using: 

````bash
npm run dev 
````

If it has been successfull, then you will see the following output:

````bash
 Core API listening on port: 3000
````

### Using the API

Once the API is listening on local port 3000, open up post man or use curl to send a url to API to synthesize the article to audio. 

Use a POST method with this body structure:

````json
{
	"url":"https://medium.com/bugbountywriteup/how-to-start-your-career-in-any-field-related-to-information-security-841adcf20901"
}
````

````
http://localhost:3000/synthesize
````

If successful you should see a 200 ok response and the output.mp3 file in the project.



