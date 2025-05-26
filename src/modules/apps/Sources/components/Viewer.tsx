import {
  Annotation,
  BookmarkView,
  FormDesigner,
  FormFields,
  Inject,
  LinkAnnotation,
  Magnification,
  Navigation,
  PageOrganizer,
  PdfViewerComponent,
  Print,
  TextSearch,
  TextSelection,
  ThumbnailView,
  Toolbar,
} from '@syncfusion/ej2-react-pdfviewer';
import * as React from 'react';

interface ViewerProps {
  url?: string;
}

const PureViewer: React.FC<ViewerProps> = ({ url }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let viewer: PdfViewerComponent;

  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          ref={(scope) => {
            viewer = scope;
          }}
          id="container"
          documentPath={
            url
              ? url
              : 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf'
          }
          resourceUrl="https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib"
          style={{ height: '640px' }}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              Annotation,
              FormFields,
              FormDesigner,
              PageOrganizer,
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
};

const Viewer = React.memo(PureViewer);

export default Viewer;
