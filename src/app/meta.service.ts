import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta,private titleService: Title,) { }

  updateMetaTags(metaTags: { name?: string; property?: string; content: string ;}[]): void {
    metaTags.forEach(tag => {
      if (tag.name) {
        this.meta.updateTag({ name: tag.name, content: tag.content  });
      } else if (tag.property) {
        this.meta.updateTag({ property: tag.property, content: tag.content });
      }
      
    });
  }


  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  

}
