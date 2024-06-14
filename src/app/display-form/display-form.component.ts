import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.scss']
})
export class DisplayFormComponent implements OnInit {
  selectedMeeting: any;
  meetingId: any;

  constructor(
    private meta: Meta,
    private router: Router,
    private route: ActivatedRoute,
    public metaService: MetaService,
    public title: Title
  ) {
    this.route.paramMap.subscribe(params => {
      this.meetingId = params.get('id');
      if (this.meetingId) {
        this.displayMeetingData(this.meetingId);
      }
    });
     
  }

  linkData = [
    { name: '1', agenda: 'Emergency Meet 1', location: 'Mumbai', imageUrl: '/assets/what-is-url-1.jpg' },
    { name: '2', agenda: 'Emergency Meet 2', location: 'Pune', imageUrl: '/assets/what-is-url-1.jpg' },
    { name: '3', agenda: 'Emergency Meet 3', location: 'Aurangabad', imageUrl: '/assets/what-is-url-1.jpg' },
    { name: '4', agenda: 'Emergency Meet 4', location: 'Nashik', imageUrl: '/assets/what-is-url-1.jpg' }
  ];

  ngOnInit(): void {
   
  }

  setMetaTags(meeting: any): void {
    const metaTags = [
      { name: 'name', content: meeting.name },
      { property: 'og:title', content: meeting.agenda },
      { property: 'og:description', content: meeting.location },
      { property: 'og:agenda', content: meeting.agenda },
      { property: 'og:image', content: meeting.imageUrl }
    ];
    this.metaService.updateMetaTags(metaTags);
    // this.metaService.setTitle(`Meeting ID: ${meeting.name}`);
    this.title.setTitle(`Meeting ID: ${meeting.name}`);
  }

 

  displayMeetingData(meetingId: string): void {
    
    
    
    const meeting = this.linkData.find(m => m.name === meetingId);
    this.router.navigate([`/display-form/${meetingId}`]);
    if (meeting) {
      this.selectedMeeting = meeting;
      // this.meta.updateTag({ property: 'og:title', content: meeting.agenda });
 
      this.setMetaTags(meeting);
    } else {
      console.error('Meeting not found');
    }
  }
}
