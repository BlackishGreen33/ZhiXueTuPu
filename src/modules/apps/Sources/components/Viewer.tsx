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
import React from 'react';

interface ViewerProps {
  url?: string;
}

const Viewer: React.FC<ViewerProps> = React.memo(({ url }) => {
  let viewer: PdfViewerComponent;

  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          ref={(scope) => {
            // @ts-ignore
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
});

export default Viewer;
