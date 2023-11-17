import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

// Decorator wriiten as JS object
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  @Input() posts: Post[] = [];
  // posts: any[] = [];
}

