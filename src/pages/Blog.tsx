import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

// Sample blog posts with YouTube videos
const blogPosts = [
  {
    id: 1,
    title: "This Dining Table Redefines Modern Craftsmanship- By Alpha Wrights",
    description: "This custom dining table features a solid hardwood top and a sleek black steel frame — designed and fabricated in-house at Alpha Wrights.",
    videoId: "KIetINirVeE", 
    date: "2025-10-20",
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="section-container mt-16">
        <div className="text-center mb-16">
          <h1 className="mb-4">Blog & Tutorials</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Learn about our processes, tips, and techniques through our video tutorials
          </p>
          <Button asChild variant="default" size="lg" className="animate-on-hover">
            <a
              href="https://www.youtube.com/@Fabrication-Gurus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Youtube className="w-5 h-5" />
              Visit Our YouTube Channel
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="overflow-hidden animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${post.videoId}`}
                  title={post.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
