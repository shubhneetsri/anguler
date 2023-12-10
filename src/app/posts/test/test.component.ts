import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PostsService } from "../post.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})

export class TestComponent {

  constructor(public postsService: PostsService){}

  onAddPost(form: NgForm){
    
    if(form.invalid){
      return;
    }
    
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
