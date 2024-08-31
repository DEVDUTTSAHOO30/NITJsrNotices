import { styled, MUIStyledCommonProps  } from '@mui/system';
import SquareIcon from '@mui/icons-material/Square';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TableHTMLAttributes } from 'react';
import {Typography,List} from '@mui/material'; 


export const TableWrapper = styled('div')({
  width: '100%',
  textAlign: 'center',
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

  '.primary-btn': {
    background: '#fff',
    border: '2px solid #274187',
    borderRadius: '10px',
    padding: '5px',
    color: '#274187',
  },

  '.primary-btn:hover': {
    color: '#fff',
    backgroundColor: '#274187',
  },

  'table': {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px auto',
    // '@media only screen and (max-width: 250px)': {
    //   overflowX: 'auto',
    //   display: 'block',
    //   minWidth: '250px',
    // },

    },

  'td, th': {
    padding: '1.5%',
    border: '1px solid #ccc',
    textAlign: 'center',
    // fontSize: '15px',
    fontSize: '1.1 rem',
    fontFamily: 'Poppins, sans-serif',
    // textTransform: 'capitalize',
  },

  'th': {
    background: '#274187',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.15rem',
    // wordBreak: 'break-word',
  },

  'td': {
    
    // color: '#757575';
    color: '#212529',
    wordBreak: 'break-word',
  },

  '.trshmob': {
    display: 'none',
  },

  '.dwn-btn, .stat-btn': {
    background: '#fff',
    color: '#274187',
    cursor: 'pointer',
    padding: '8px',
    outline: 'none',
    border: '1px solid #274187',
    borderRadius: '8px',
  },

  '.dwn-btn:hover, .stat-btn:hover': {
    backgroundColor: '#274187',
    color: '#fff',
  },
});



interface CustomTableProps extends MUIStyledCommonProps, TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  responsive?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}


export const CustomBoxWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  bottom: 0,
  backgroundColor: 'rgb(39, 65, 135)',
  paddingTop: theme.spacing(1),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(2),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2.5)
 
}));
export const CustomTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1.6rem',
  fontWeight: '500',
  fontFamily: 'Poppins, sans-serif',
}));

export const CustomText = styled(Typography)({
  color: '#757575', 
  textAlign: 'justify', 
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '500',
  paddingLeft: '1.1rem',
  paddingTop: '1.5rem',
  paddingRight:'5rem'
});

export const CustomList = styled(List)({
  color: '#757575',
  textAlign: 'justify',
  fontSize: '1.1rem',
  lineHeight: '2rem',
});

export const CustomListItem=styled('span')({
  paddingRight:'0.5rem'
})
{/* <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    bottom: 0,
                    backgroundColor: colors.secondary,
                    py: 1,
                    px: 2,
                    my: 2,
                }}
            >
                <Typography variant="h5" color="common.white">
                    &nbsp;&nbsp; {t("central_facilities_hospital_referral_head")}
                </Typography>
        </Box>            


        <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    lineHeight: '2rem'
                }}
            >
                {t("central_facilities_hospital_referral_body")}
        </Typography> */}