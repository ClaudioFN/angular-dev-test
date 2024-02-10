import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://s2-techtudo.glbimg.com/7s-oTU1M1qdPdvUhDkeHV7tZcZo=/0x0:695x364/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/W/5/VtjAthQbiTMVF0xTVEqA/heroes-lancamento-caixa-pc.jpg"
  contentTitle: string = "Heroes of the Storm!"
  contentDescription: string = "Game better than ..."

  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photo

  }

}
