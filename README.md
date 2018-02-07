Car Performance Monitoring 

Car health is important nowadays . With the evolution of IoT car can be fitted with sensors to gather different information about Car’s health and performance. Our solution will gather information from Car’s sensors and store it in HarperDB (On edge itself) . The data stored can be used to analyse and provide user information  via mobile app.

Problem 

Car performance data is send back and forth over cloud to store making it mandatory to have connectivity . The whole notion of edge analytics is getting traction in which application uses the processing power of IoT devices to filter, pre-process, aggregate or score IoT data on edge itself 

Three motivating factors for using Edge Computing
Data Privacy 
Connectivity 
Latency 


Solution 

With the power of HarperDB data can be stored on edge devices itself and can be analysed on edge itself. We are proposing solution where data from sensors will be ingested over standard MQTT protocol and then stored into DB for advanced analytics which can be presented to user via Mobile app .

Technology used 

Flogo : To build IoT integration flow.  Flogo (http://www.flogo.io/ ) is an open source tool built by TIBCO software used to create lightweight IoT integration flows. All the logic can be visually coded with drag and drop facility.  Our solution ingest data from MQTT and inserts in to HarperDB over REST . 
           
            
HarperDB : To store data coming from sensors 
Raspberry pi : To run IoT flow and interfacing with sensors . The flow created with flogo can be built and run on Raspberry pi . Once the flow is running on device it can accept data coming over MQTT .

Application 










(https://projects.invisionapp.com/share/6KFQENGCPSY#/screens/277983602_CarApp-01)


Future scope 


This application can be useful to find out Car heath and performance . This can be extended to provide predictive maintenance updates about car to user 

Telematics insurance sometimes called black box insurance, pay-as-you-drive or pay-how-you-drive insurance - is a rapidly growing area of the industry that's revolutionising the way we think about car insurance. App can be extended to predict Insurance premiums to user.

HarperDB can be used with different telematics device providers for storing data on edge.

