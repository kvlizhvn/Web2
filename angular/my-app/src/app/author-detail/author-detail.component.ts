import { Component, OnInit } from '@angular/core';
import {Authors} from '../authors';
import {AuthorsService} from '../authors.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  author: Authors;

  constructor(private route: ActivatedRoute, private authorService: AuthorsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.getAuthor(id);
    });
  }

  getAuthor(id: number) {
    this.authorService.getAuthor(id).subscribe((author) => {
      this.author = author;
    });
  }
  // updateAuthor(): void {
  //   this.authorService.updateAuthor(this.author).subscribe((author) => {
  //     this.author.name = this.name;
  //   });

  }

