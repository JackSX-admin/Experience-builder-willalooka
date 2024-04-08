import { type IMThemeVariables, css, type SerializedStyles, polished } from 'jimu-core'

export function getStyle (theme: IMThemeVariables): SerializedStyles {
  return css`
    .widget-setting-legend{
      font-weight: lighter;
      font-size: 8px;

      .source-descript {
        color: ${theme.colors.palette.dark[600]};
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 50%;
        height: 60px;
        overflow: hidden;
        padding: 1px;
        border: ${polished.rem(2)} solid initial;
        img, div{
          width: 100%;
          height: 100%;
        }
      }

      .card-layout-content{
        width: 50%;
      }

      .legend-tools{
        .legend-tools-item{
          display: flex;
          margin-bottom: 4px;
        }
      }

      .advanced-setting-row .jimu-widget-setting--row-label {
        color: #c5c5c5;
        font-size: 0.1rem;
      }

      .map-selector-section .component-map-selector .form-control{
        width: 50%;
      }

      .jimu-builder--background-setting .background-image {
        display: none;
      }

      .jimu-builder--background-setting .background-image-fill-type {
        display: none;
      }
    }
  `
}
