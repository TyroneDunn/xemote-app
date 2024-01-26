import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MatCardModule } from '@angular/material/card';
import { AvatarModule } from 'primeng/avatar';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
   imports: [ CommonModule, CarouselModule, MatCardModule, AvatarModule ],
  templateUrl: './testimonials.section.html',
  styleUrls: ['./testimonials.section.scss']
})
export class TestimonialsSection {
   @Input() isMobile$: Observable<boolean> = of(false);
   public testimonials = [
      {
         author: 'S Eksteen',
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdstudiosphotography.com%2Fwp-content%2Fuploads%2F2019%2F01%2FCorporate-Headshots-3-square.jpg&f=1&nofb=1&ipt=514df0424de3fe79d70754364615e46d2039ac0270d63c67b7b9131b7ba03d5b&ipo=images',
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
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.imagefitz.com%2Fwp-content%2Fuploads%2F2019%2F02%2FProfessional-Headshot-Photography-1JF1398-Square.jpg&f=1&nofb=1&ipt=ea7755362e81226ab27a192a238903f11fbe563e7040ee9108ede67b48e677e3&ipo=images',
         message: 'Ek kan met eerlikheid sê dat die diens nog altyd net wonderllik was. Xemote het my lewe baie makliker gemaak vandat ek oor geskakel het na hulle elektroniese monitoring. Dis maklik, eenvoudig en ek word dadelik in kennis gestel deur ‘n sms as my temperatuur van my yskas te laag daal.',
         company: 'Local Choice Medinorth'
      },
      {
         author: 'D Ross',
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F31%2F39%2F92%2F313992da3084656a53fdcaa9137c09a4.jpg&f=1&nofb=1&ipt=a3fa6d54c347fa5bd6bd5ac120802e2d05fef7bb0d4c780abebc8882a982ab65&ipo=images',
         message: 'I have only received quick and efficient customer service from Xemote and will recommend them to any customer.\n' +
            '\n' +
            'All our queries are handled with professionalism and met all of our expectations.',
         company: 'Local Choice Cormed'
      },
      {
         author: 'E Van Eeden',
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1355110818%2Fphoto%2Fstudio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DT39jUOOjC8H-Op0cfd-uiNXk1a2XBn1sXkQbKIWwY7E%3D&f=1&nofb=1&ipt=3aab87374994e805d1cd8586f0d030f3fa298714ea7f6df2d671dfeb60dec4b1&ipo=images',
         message: 'On 14 March 2022, I contacted Xemote to enquire about a remote monitoring device for my dispensary fridges. I received immediate excellent service. Hanri sent a quote the same day and my device was installed within 2 days. She was very helpful and friendly and took me through the setup step by step.\n' +
            '\n' +
            'I receive a report every morning and phone notifications when there are temperature issues with the fridges. One morning she even contacted me to say that she thinks our Gateway was unplugged by accident before we even realised it.\n' +
            '\n' +
            'I receive constant constant excellent service and can really recommend this company to any business looking for remote temperature monitoring services. ',
         company: 'Elizabeth Street Pharmacy'
      },
      {
         author: 'C Botma',
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheadshots-inc.com%2Fwp-content%2Fuploads%2F2023%2F03%2Fprofessional-Headshot-Example-2-1.jpg&f=1&nofb=1&ipt=8a68244a301932019a9aa98f1052bf10e8171f4c24ea8723f222258e2e183c25&ipo=images',
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
         author: 'W Pienaar',
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2F97%2Ff8%2F1597f8551eb52d585f9e4779018b448a.png&f=1&nofb=1&ipt=3a4dc3b53b138e1dc1319ad4070f7b4711e11d6b889c35984e1deb5e4f0644a5&ipo=images',
         message: 'We have nothing but praise for the staff and performance of Xemote. All of our queries are always answered and attended to promptly and with professionalism. I can, under all circumstances, praise and rely on great service. It is such a privilege to deal with a professional and efficient company and would recommend their services to every person or company interested in their products!',
         company: 'In2Food'
      },
      {
         author: 'S Barnes',
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzachonleadership.com%2Fwp-content%2Fuploads%2F2016%2F07%2FHeadshot-square.jpg&f=1&nofb=1&ipt=6513b511a4d1059aebf7b3c663c4151ab30b0c29079fe6076904ea89c973c8b6&ipo=images',
         message: 'For the years that we are with Xemote, we have never experienced problems that will put our fresh product at risk. It is an utmost pleasure to view all temperature logging on a PC or in the comfort of your own home on your cell phone. The service we have received from Xemote is good, if not perfect, without a doubt. ',
         company: 'In2Food'
      },
      {
         author: 'A Karan',
         image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Felevatedtalentsolutions.com%2Fwp-content%2Fuploads%2F2016%2F07%2Fheadshot_square.jpg&f=1&nofb=1&ipt=9ceff271d9cb3e525eace2301b7b34a8fb0af0b6617fbb0053ebd5c91a7f9806&ipo=images',
         message: 'Xemote provides us with unique process insight at various critical control points.  This significant benefit delivers accurate and actionable real-time information that improves our resource management and optimises production capability through early warning notifications. ',
         company: 'Karan Beef'
      },
      {
         author: 'Z Rens',
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fagencylp.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fheadshot_square-1024x1024.jpg&f=1&nofb=1&ipt=99655037952463b5d20b7970089ba0d6ad0762f3e079b46f5d568c4032211390&ipo=images',
         message: 'The historical data and reports also allow us to identify negative infrastructure operational trends which allows us to implement preventative maintenance schedules. This saves us time and money and prevents expensive downtime.',
         company: 'Renbro Meat'
      },
      {
         author: 'L Visagie',
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fheadshots-inc.com%2Fwp-content%2Fuploads%2F2023%2F02%2Fprofessional-headshot-photography-example-7-1.jpg&f=1&nofb=1&ipt=bcd71c0731b0ee93d899d259c03cbfc2f45f69ad232ba8aa0ca5670185000c8a&ipo=images',
         message: 'The Xemote Remote Monitoring Application is an excellent tool for the improvement of process control and risk management within our business and we are confident that it will positively contribute to improving our bottom line.',
         company: 'Enterprise Meats'
      },
      {
         author: 'L Nagel',
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcothescon.net%2Fwp-content%2Fuploads%2F2019%2F10%2Fheadshot-square.png&f=1&nofb=1&ipt=39f81db3a0a622260416fb4631e1b307bda3c3c19cecca36e9c43ea14b66da30&ipo=images',
         message: 'It is with great pleasure that I have the opportunity to recommend Xemote for affordable Food Production Process Monitoring solutions. Xemote successfully customised and implemented their technology to meet our specific requirements in the monitoring of our retort cooking process.',
         company: 'Rhodes Food Group'
      },
      {
         author: 'JG Lubbe',
         image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F53b599ebe4b08a2784696956%2F53c987b9e4b02a3a05287045%2F5859ec98b8a79b1d0623831e%2F1482288715990%2FHeadshots-NYC-CEOportrait-043.jpg&f=1&nofb=1&ipt=d239b42c4f1a63a974e96bdc47ab522beda4044a6d8ddeaea930978710d74140&ipo=images',
         message: 'We at Total Funeral Logistics (Pty) ltd write to you with great appreciation and admiration for what Xemote means to our firm and what great value your devices add to our services. In the funeral transport industry, we have to adhere to regulations where temperature monitoring in our refrigerated vehicles is crucial. We need to monitor and prove that the temperatures are below certain levels at all times. With your devices installed in our vehicles, it really has become an effortless safety net for us. We have also gained an edge over our competitors who do not have the luxury that your devices offer. We are extremely grateful to Xemote and wish for a great partnership for years to come.',
         company: 'Total Funeral Logistics'
      },
   ];
   public clients = ['The Local Choice', 'IoT.nxt', 'Nibbly bits', 'Rhodes Food Group', 'Intenda',
      'in2Juice', 'Garon Specialties', 'in2Food', 'Ambasaam', 'Aramex', 'Winelands Pork',
      'Comafrica', 'Arrie Nel Pharmacy Group', 'Sir Fruit', 'Agency for Food Safety',
      'Total Funeral Logistics'];
}
