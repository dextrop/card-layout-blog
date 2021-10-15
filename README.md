# Blog Card Layout
![imagedemo](https://ask-jennie-assets.s3.ap-south-1.amazonaws.com/card-layout-2.png)
## Intregration Steps

Extract the code to some directy, Once the code is extracted, user can see folder structure

```
src/
  app/
    cardlayout/
      cardlayout.component.html
      cardlayout.component.ts
      cardlayout.component.css
```

copy folder `cardlayout` inside `src/app/` and paste it in your angular project inside `src/app/`
Add `CardlayoutComponent` to app.module.ts.

Add Bootstrap and Font Awesome to index.html 
- For Bootstrap [Bootstrap Get Started](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- For Font Awesome `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" rel="stylesheet">`


## Using the card layout

Card Layout can be simply used as 

```
<div class="container">
  <input placeholder="Search Post" class="form-control searchbox"> 
  <div class="row">
    <div class="col-md-4" *ngFor="let article of articles; let i = index">
      <app-cardlayout
        [post_title]="article.title"
        [updated_on]="article.publishedAt"
        [post_category]="article.author"
        [post_description]="article.description"    
        [post_link]="article.url"
      ></app-cardlayout>
    </div>
  </div>
</div>
```