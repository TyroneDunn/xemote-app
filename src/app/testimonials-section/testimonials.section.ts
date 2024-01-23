import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [ CommonModule, CarouselModule, MatCardModule ],
  templateUrl: './testimonials.section.html',
  styleUrls: ['./testimonials.section.scss']
})
export class TestimonialsSection {
   public testimonials = [
      {
         author: 'S Eksteen',
         message: 'If you were considering installing automated digital/wireless temperature' +
            ' monitoring systems\n' +
            'for medication refrigerators & ambient temperatures, Xemote makes it easy! One less thing\n' +
            'to stress about! It makes the Statutory Body smile too.\n' +
            '\n' +
            'Give them a call & explain your needs. The paperwork is seamless & you will be guided if\n' +
            'needed, the training on the dashboard for the analytics, even easier!\n' +
            '\n' +
            'During & after-sales service is always extremely efficient, energetic & optimistic.\n' +
            'Hanri is the best!\n' +
            '\n' +
            'You will not regret making Xemote part of your operation!\n',
         company: 'Local Choice Eksteen Pharmacy'
      },
      {
         author: 'S Snyman',
         message: 'Ek kan met eerlikheid sê dat die diens nog altyd net wonderllik was. Xemote het my lewe baie makliker gemaak vandat ek oor geskakel het na hulle elektroniese monitoring. Dis maklik, eenvoudig en ek word dadelik in kennis gestel deur ‘n sms as my temperatuur van my yskas te laag daal.',
         company: 'Local Choice Medinorth'
      },
      {
         author: 'D Ross',
         message: 'I have only received quick and efficient customer service from Xemote and will recommend them to any customer.\n' +
            '\n' +
            'All our queries are handled with professionalism and met all of our expectations.',
         company: 'Local Choice Cormed'
      },
      {
         author: 'E Van Eeden',
         message: 'On 14 March 2022, I contacted Xemote to enquire about a remote monitoring device for my dispensary fridges. I received immediate excellent service. Hanri sent a quote the same day and my device was installed within 2 days. She was very helpful and friendly and took me through the setup step by step.\n' +
            '\n' +
            'I receive a report every morning and phone notifications when there are temperature issues with the fridges. One morning she even contacted me to say that she thinks our Gateway was unplugged by accident before we even realised it.\n' +
            '\n' +
            'I receive constant constant excellent service and can really recommend this company to any business looking for remote temperature monitoring services. ',
         company: 'Elizabeth Street Pharmacy'
      },
      {
         author: 'C Botma',
         message: 'It is my pleasure to be able to recommend them to anyone that needs their expertise in this field. Right from the first inquiry with Hanri Fourie at Xemote, we have only experienced fast, professional, and friendly advice, as well as spot-on solutions to our specific requirements.\n' +
            '\n' +
            ' \n' +
            '\n' +
            'With all the expensive Covid and other vaccines that need cold chain management, it has been a pleasure to use the Xemote application as well as a comfort to know that we are fully compliant with all current requirements as prescribed by the National Department of Health and other regulatory bodies such as the SA Pharmacy Council.\n' +
            '\n' +
            ' \n' +
            '\n' +
            'I have recommended the Xemote system to several colleagues to use and will not hesitate to do so again.',
         company: 'Mays Chemists Melville'
      },
      {
         author: 'C May',
         message: 'Our core business relies heavily on a continuous cold chain from raw materials to the final product. Having numerous fridges and freezers on-site, any maintenance manager’s worst nightmare would be finding a fridge or freezer off, and the product has started to defrost. Before installing the Xemote system, we learnt a hard and expensive lesson. With the sensors in place monitoring has become so much easier, we receive daily snapshots of temperatures and can view live readings of temperatures on my dashboard. Pull reports of different fridges temperatures. Receive emails and SMS’s when temperatures exceed band settings. And with just monitoring the temperatures, I can judge the performance of my compressors and have planned my schedule maintenance accordingly.\n' +
            '\n' +
            'The client service I receive from Xemote is just brilliant, they so on the ball, that they keep me on my toes. Since the beginning, they were always just a phone call or email away and would solve any problem efficiently and effectively.',
         company: 'In2Food'
      },
      {
         author: 'W Pienaar',
         message: 'We have nothing but praise for the staff and performance of Xemote. All of our queries are always answered and attended to promptly and with professionalism. I can, under all circumstances, praise and rely on great service. It is such a privilege to deal with a professional and efficient company and would recommend their services to every person or company interested in their products!',
         company: 'In2Food'
      },
      {
         author: 'S Barnes',
         message: 'For the years that we are with Xemote, we have never experienced problems that will put our fresh product at risk. It is an utmost pleasure to view all temperature logging on a PC or in the comfort of your own home on your cell phone. The service we have received from Xemote is good, if not perfect, without a doubt. ',
         company: 'In2Food'
      },
      {
         author: 'A Karan',
         message: 'Xemote provides us with unique process insight at various critical control points.  This significant benefit delivers accurate and actionable real-time information that improves our resource management and optimises production capability through early warning notifications. ',
         company: 'Karan Beef'
      },
      {
         author: 'Z Rens',
         message: 'The historical data and reports also allow us to identify negative infrastructure operational trends which allows us to implement preventative maintenance schedules. This saves us time and money and prevents expensive downtime.',
         company: 'Renbro Meat'
      },
      {
         author: 'L Visagie',
         message: 'The Xemote Remote Monitoring Application is an excellent tool for the improvement of process control and risk management within our business and we are confident that it will positively contribute to improving our bottom line.',
         company: 'Enterprise Meats'
      },
      {
         author: 'L Nagel',
         message: 'It is with great pleasure that I have the opportunity to recommend Xemote for affordable Food Production Process Monitoring solutions. Xemote successfully customised and implemented their technology to meet our specific requirements in the monitoring of our retort cooking process.',
         company: 'Rhodes Food Group'
      },
      {
         author: 'JG Lubbe',
         message: 'We at Total Funeral Logistics (Pty) ltd write to you with great appreciation and admiration for what Xemote means to our firm and what great value your devices add to our services. In the funeral transport industry, we have to adhere to regulations where temperature monitoring in our refrigerated vehicles is crucial. We need to monitor and prove that the temperatures are below certain levels at all times. With your devices installed in our vehicles, it really has become an effortless safety net for us. We have also gained an edge over our competitors who do not have the luxury that your devices offer. We are extremely grateful to Xemote and wish for a great partnership for years to come.',
         company: 'Total Funeral Logistics'
      },
   ];
}
