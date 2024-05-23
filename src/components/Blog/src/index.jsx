import { Blog } from "./pattern/composition/index";
import "./styles.css";

export default function BlogComposition() {
  return (
    <div className="blog-container">
      <Blog.Section
        blog={"Blog"}
        title={"Short heading goes here"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <Blog.Card
        category={"Category"}
        title={"Blog title heading will go here"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
        }
        name={"Full name"}
        date={"12 Jan 2022"}
        minutes={"5 min read"}
      />
      <Blog.Button button={"View all"} />
    </div>
  );
}
