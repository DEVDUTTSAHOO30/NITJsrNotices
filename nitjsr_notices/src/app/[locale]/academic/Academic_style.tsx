import { styled, MUIStyledCommonProps  } from '@mui/system';
import SquareIcon from '@mui/icons-material/Square';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TableHTMLAttributes } from 'react';
export const SectionWrapper = styled('div')({
  width: '100%',
  marginBottom: '3%',
  '@media only screen and (max-width: 1440px)': {
    padding: '20px 0 40px',
  },
  '@media only screen and (max-width: 1360px)': {
    padding: '20px 0 20px',
  },
  '@media only screen and (max-width: 991px)': {
    padding: '10px 0 10px',
  },
  '.pdfLink': {
    color: '#000',
    fontSize: '16px',
    fontFamily: 'Poppins, sans-serif',
  },
  '.pdfLink:hover': {
    color: '#274187',
  },
  '.mycard': {
    border: '1px solid lightgrey',
    height: '250px',
    marginBottom: '5%',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  '.dept-img': {
    width: '100%',
    height: '200px',
  },
  '.dept-img:hover': {
    transform: 'scale(1.05)',
    transition: '0.3s',
  },
  '.caption h6': {
    padding: '10px',
    color: '#274187',
  },
  '.fee-btn': {
    borderRadius: '20px',
    border: '1px solid #274187',
    color: '#274187',
    padding: '10px',
    background: '#fff',
  },
  '.fee-btn:hover': {
    background: '#274187',
    color: '#fff',
  },
  '.members': {
    display: 'flex',
    flexWrap: 'wrap',
  },
  '.members h3': {
    fontSize: '20px',
  },
  '.bar_container': {
    display: 'flex',
    alignItems: 'center',
  },
  '#left_bar': {
    height: '1.8px',
    width: '15px',
    backgroundColor: '#274187',
  },
  '#middle_bar': {
    height: '5px',
    width: '20px',
    backgroundColor: '#274187',
    borderRadius: '10px',
  },
  '#right_bar': {
    height: '1.8px',
    width: '40px',
    backgroundColor: '#274187',
  },
  '.member_box': {
    margin: '10px',
    marginRight: '30px',
    maxWidth: '500px',
  },
  '.member_box p': {
    fontSize: '16px',
    color: '#000',
    margin: '5px',
  },
  '.single_branch_div .branch_name': {
    textDecoration: 'none',
    color: '#496bb4',
    fontWeight: '700',
    boxSizing: 'inherit',

    /* Change color on hover */
    '&:hover': {
      color: 'rgb(0, 0, 0)',
    },
  },
});
export const TableWrapper = styled('div')`
  width: 100%;
  margin-bottom: 3%;
  @media only screen and (max-width: 1440px) {
    padding: 20px 0 40px;
  }
  @media only screen and (max-width: 1360px) {
    padding: 20px 0 20px;
  }
  @media only screen and (max-width: 991px) {
    padding: 10px 0 10px;
  }

  .primary-btn {
    background: #fff;
    border: 2px solid #274187;
    border-radius: 10px;
    padding: 5px;
    color: #274187;
  }
  .primary-btn:hover {
    color: #fff;
    background-color: #274187;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px auto;
  }

  th {
    background: #274187;
    color: white;
    font-weight: bold;
  }

  td,
  th {
    padding: 1.5%;
    border: 1px solid #ccc;
    text-align: left;
    font-size: 15px;
  }
  .trshmob {
    display: none;
  }
  .dwn-btn,
  .stat-btn {
    background: #fff;
    color: #274187;
    cursor: pointer;
    padding: 8px;
    outline: none;
    border: 1px solid #274187;
    border-radius: 8px;
  }
  .dwn-btn:hover,
  .stat-btn:hover {
    background-color: #274187;
    color: #fff;
  }

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    table {
      width: 100%;
    }

    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    .trshmob {
      display: block;
    }
    tr {
      border: 1px solid #ccc;
      margin-top: 20px;
    }

    td {
      /* Behave like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 42%;
      word-wrap: break-word;
      padding-bottom: 5%;
      overflow: hidden;
    }
    .textCenter td {
      text-align: center;
    }
    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      /* Label the data */
      content: attr(data-column);

      color: #000;
      font-weight: bold;
    }
  }
`;
const HeadingWrapper = styled('h1')({
  // Add your custom styles here
  fontFamily: 'Arial, sans-serif',
  textAlign: 'left',
  fontWeight: 700,
  
  lineHeight: '1.2',
  letterSpacing: '1px',
  color: '#333', // Example color
});

interface CustomTableProps extends MUIStyledCommonProps, TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  responsive?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const CustomTable = styled('table')<CustomTableProps>`
  width: 100%;
  border-collapse: collapse;
  margin: 50px auto; /* Apply margin using styled-components */

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: ${(props) => (props.striped ? '#f2f2f2' : 'inherit')};
  }

  /* Implementing bordered effect */
  ${(props) => (props.bordered ? 'border: 1px solid #ddd;' : '')}

  /* Implementing hover effect */
  tr:hover {
    background-color: ${(props) => (props.hover ? '#ddd' : 'inherit')};
  }

  /* Implementing responsive behavior */
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
export const CustomHeading = ({ content, ...props }) => {
  return <HeadingWrapper {...props}>{content}</HeadingWrapper>;
};
export const StyledSquareIcon = styled(SquareIcon)`
width: 24px;
height: 24px;
background-color: transparent;
border: 1px solid #496bb4;
`;
export const CustomStyledIcon = () => {
  return (
      <div >
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              width: 'fit-content',
              height: 'fit-content',
          }}>
              <div style={{
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  width: '24px', // Adjust the size of the circle
                  height: '24px', // Adjust the size of the circle
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: '-1',
              }}>
                  <ChevronRightIcon style={{
                      fontSize: '22px', // Adjust the size of the icon
                      color: '#757575', // Adjust the color of the icon
                  }} />
                  
              </div>
          </div>
      </div>
  );
}
export const CustomParagraphWrapper = styled('div')({
  width: '100%',
  padding: 0,
  '@media only screen and (max-width: 1440px)': {
      padding: '20px 0 40px',
  },
  '@media only screen and (max-width: 1360px)': {
      padding: '20px 0 20px',
  },
  '@media only screen and (max-width: 991px)': {
      padding: '1px 0 1px',
  },
  '.smallparatext': {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      lineHeight: '30px',
      fontWeight: 400,
      marginBottom: '20px',
  },
  '.linktext': {
      fontFamily: 'Poppins, sans-serif',
      color: '#00a8ff',
      '&:hover': {
          color: '#274187',
          cursor: 'pointer',
      },
  },
  '.detail-text': {
      fontSize: 'small',
      fontFamily: 'Poppins, sans-serif',
      color: '#000',
      lineHeight: 1.5,
  },
  '.list_conatiner li': {
      listStyleType: 'disc',
  },
});