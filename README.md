Car Health /Performance Monitoring 

With the invent of tremendous analytical and statistical algorithms, there has been a boom of solutions providing humongous sources of information which can be leveraged in multiple ways to improve customer satisfaction. Consumers have become smarter these days and they measure their experience on various analysis made by modern day computing resources.

The shadows of this trend has impacted hugley on the automobile industry. With the evolution of IoT, cars can be fitted with sensors to gather various information related to Car’s health and performance. We propose a solution where, we collect this information and store it in HarperDB (On edge itself) . The data stored can be used to analyse and provide user information via mobile app.


Problem 

Car performance data is send back and forth over cloud to store making it mandatory to have connectivity . The whole notion of edge analytics is getting traction in which application uses the processing power of IoT devices to filter, pre-process, aggregate or score IoT data on edge itself 

Three motivating factors for using Edge Computing
Data Privacy 
Connectivity 
Latency 


Solution 

With the power of HarperDB data can be stored on edge devices itself and can be analysed on edge itself. We are proposing solution where data from sensors will be ingested over standard MQTT protocol and then stored into DB for advanced analytics which can be presented to user via Mobile app .

Technology used 

Flogo : To build IoT integration flow.  Flogo (http://www.flogo.io/ ) is an open source tool built by TIBCO software used to create lightweight IoT integration flows. All the logic can be visually coded with drag and drop facility.  Once the flow is ready we actually build the executable that will run on edge device like pi. It will listen on MQTT topic for the data coming from sensors. MQTT trigger in the flow will ingest data from MQTT and start the flow. This flow will insert data coming from sensors into HarperDB. 
           
            
HarperDB : To store data coming from sensors 

Raspberry pi : To run IoT flow and interfacing with sensors . The flow created with flogo can be built and run on Raspberry pi . Once the flow is running on device it can accept data coming over MQTT .

MQTT : MQTT protocol is used to ingest data from multiple IoT sensors.

Ionic : Ionic application framework is used to build cross platform mobile application. Using in-vehicle connectvity the data from harperDB running on Pi can be shown to user via mobile app. 

Application 










(https://projects.invisionapp.com/share/6KFQENGCPSY#/screens/277983602_CarApp-01)


Updated Prototype 

https://projects.invisionapp.com/share/57FSS04J8AH#/screens/278741558


Future scope / Applications


1. Useful to find out Car heath and performance . 

2. Predictive maintenance updates about car to user.

3. Provide driver assistance.

4. Telematics insurance sometimes called black box insurance, pay-as-you-drive or pay-how-you-drive insurance - is a rapidly growing area of the industry that's revolutionising the way we think about car insurance. App can be extended to predict Insurance premiums to user. HarperDB can be used with different telematics device providers for storing data on edge.

5. eCalls : In the event of a serious accident, eCall automatically emergency number and sends the appropriate authorities to the scene.

