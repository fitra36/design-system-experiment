import BookmarkIcon from '@/components/icons/BookmarkIcon';
import { Meta } from '@/layouts/Meta';
import Button from '@/sejutacita/employer/Button';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="space-y-3">
        <div className="space-x-3">
          <Button type="button" preset="primary" size="sm">
            Small Button
          </Button>

          <Button type="button" preset="primary">
            Medium Button
          </Button>

          <Button type="button" preset="primary" size="lg">
            Large Button
          </Button>
        </div>
        <div className="space-x-3">
          <Button
            type="button"
            preset="primary"
            size="sm"
            icon={<BookmarkIcon />}
          >
            Small Button
          </Button>

          <Button type="button" preset="primary" icon={<BookmarkIcon />}>
            Medium Button
          </Button>

          <Button
            type="button"
            preset="primary"
            size="lg"
            icon={<BookmarkIcon />}
          >
            Large Button
          </Button>
        </div>
        <div className="space-x-3">
          <Button type="button" preset="primary" size="sm" loading>
            Small Button
          </Button>

          <Button type="button" preset="primary" loading>
            Medium Button
          </Button>

          <Button type="button" preset="primary" size="lg" loading>
            Large Button
          </Button>
        </div>
        <div className="space-x-3">
          <Button type="button" preset="primary" size="sm" disabled>
            Small Button
          </Button>

          <Button type="button" preset="primary" disabled>
            Medium Button
          </Button>

          <Button type="button" preset="primary" size="lg" disabled>
            Large Button
          </Button>
        </div>
        <div className="space-x-3">
          <Button type="button" preset="primary" size="sm" disabled>
            Small Button
          </Button>

          <Button type="button" preset="primary" disabled>
            Medium Button
          </Button>

          <Button type="button" preset="primary" size="lg" disabled>
            Large Button
          </Button>
        </div>
      </div>
    </Main>
  );
};

export default Index;
