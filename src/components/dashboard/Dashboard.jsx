import React from 'react'
import Header from '../Header'
import { Box, Button, IconButton,Typography,useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { mockTransactions } from '../../constants/mockConstant'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineCharts from '../LineCharts';
import BarCharts from '../BarCharts';
import GeographyCharts from '../GeographyCharts';
import StatisticsBox from '../StatisticsBox';
import ProgressCircle from '../ProgressCircle';


function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard"/>
       
        {/* Download reports sub header far right */}
        <Box>
          <Button sx={{backgroundColor:colors.blueAccent[700], color:colors.grey[100], fontSize:"14px", fontWeight:"bold", padding:"10px 20px"}}>
            <DownloadOutlinedIcon sx={{mr:"10px"}}/>
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Entire Dashboard Grid */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
        {/* Section 1 */}
        {/* Row 1 */}
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatisticsBox title="12,361" subtitle="Emails Sent" progress="0.75" increase="+14%" icon={<EmailIcon sx={{color: colors.greenAccent[600], fontSize:"26px"}}/>}/>
        </Box>
        {/* Row 2 */}
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatisticsBox title="541,225" subtitle="Sales Obtained" progress="0.5" increase="+21%" icon={<PointOfSaleIcon sx={{color: colors.greenAccent[600], fontSize:"26px"}}/>}/>
        </Box>
        {/* Row 3 */}
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatisticsBox title="12,441" subtitle="New Clients" progress="0.30" increase="+5%" icon={<PersonAddIcon sx={{color: colors.greenAccent[600], fontSize:"26px"}}/>}/>
        </Box>
        {/* Row 4 */}
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatisticsBox title="1,345,678" subtitle="Traffic Inbound" progress="0.8" increase="+43%" icon={<TrafficIcon sx={{color: colors.greenAccent[600], fontSize:"26px"}}/>}/>
        </Box>
        {/* Section 2  */}
        {/* Row 1 */}
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant='h5' fontWeight="600" color={colors.grey[100]} mb={1}>
                Revenue Generated
              </Typography>
              <Typography variant='h3' fontWeight="600" color={colors.greenAccent[500]}>
                Ksh 89,472.52
              </Typography> 
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{fontSize: "26px", color:colors.greenAccent[500]}}/>
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineCharts isDashboard={true}/>
          </Box>
        </Box>
        {/* Row 2 Transactions*/}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
          <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]} p="15px">
            <Typography color={colors.grey[100]} variant='h5' fontWeight={600}>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i)=>(
            <Box key={`${transaction.txId}-${i}`} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
              <Box>
                <Typography color={colors.greenAccent[500]} variant='h5' fontWeight={600}>
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]} variant='h5'>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>
                <Typography variant="h5">{transaction.date}</Typography>
              </Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                <Typography variant="h5">Ksh {transaction.cost}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        {/* Section 3 */}
        {/* Row 1 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
          <Typography variant='h5' fontWeight="600">
            Campaign
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
            <ProgressCircle size="125"/>
            <Typography variant='h5' color={colors.greenAccent[500]} sx={{mt:"15px"}}>
              Ksh 648,927 revenue generated
            </Typography>
            <Typography>
              Includes misc. expenses and costs
            </Typography>
          </Box>
        </Box>
        {/* Row 2 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Typography variant='h5' fontWeight="600" sx={{p:"30px 30px 0 30px"}}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarCharts isDashboard={true}/>
          </Box>
        </Box>
        {/* Row 3 */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
          <Typography variant='h5' fontWeight="600" sx={{mb:"15px"}}>
            Geography Traffic
          </Typography>
          <Box height="200px">
            <GeographyCharts isDashboard={true}/>
          </Box>
        </Box>
      </Box>   
    </Box>
  )
}

export default Dashboard