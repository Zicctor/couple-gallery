import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Lorem Ipsum',
    excerpt: 'Lorem Ipsum.',
    date: 'Tháng Năm 15, 2025',
    image: 'https://images.pexels.com/photos/1182338/pexels-photo-1182338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Lorem Ipsum',
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    excerpt: 'Lorem Ipsum.',
    date: 'Tháng Tư 28, 2025',
    image: 'https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    author: 'Lorem Ipsum',
  }
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lời khuyên, những bức thư và những câu chuyện tâm sự
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="group">
              <Link href={`/blog/${post.id}`} className="block">
                <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <CalendarIcon className="h-4 w-4" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.author}</span>
              </div>
              <Link href={`/blog/${post.id}`} className="block group-hover:text-[#93E1D8] transition-colors">
                <h3 className="font-cormorant text-2xl font-medium mb-3">{post.title}</h3>
              </Link>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`}>
                <Button variant="link" className="p-0 text-[#93E1D8] hover:text-[#93E1D8]/80">
                  Đọc thêm
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/blog">
            <Button variant="outline" className="border-[#93E1D8] text-[#93E1D8] hover:bg-[#93E1D8]/10 px-8">
              Xem các Blog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}