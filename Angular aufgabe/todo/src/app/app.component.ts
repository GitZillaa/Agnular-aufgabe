import { NgFor } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [NgFor]
})
export class AppComponent {
  title = "todo";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];
  
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
  
  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
}