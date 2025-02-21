import React from 'react'
import { useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { tokens } from '../theme';
import { mockLineData as data } from '../constants/mockConstant';

function LineCharts({isDashboard=false}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke:colors.grey[100]
                    }
                },
                //Labels
                legend:{
                    text:{
                        fill:colors.grey[100],
                        fontSize: 18,
                    }
                },
                // X and Y labels
                ticks:{
                    line:{
                        stroke:colors.grey[100],
                        strokeWidth:1
                    },
                    text:{
                        fill:colors.grey[100],
                        fontSize: 16,
                    }
                },
            },
            //Keys
            legends:{
                text:{
                    fill:colors.grey[100],
                    fontSize: 16,
                },
            },
            tooltip:{
                container:{
                    color:colors.primary[500],
                },
            },
        }}
        colors={isDashboard ? { datum : "color"} : {scheme: "nivo"}}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 6,
            tickPadding: 8,
            tickRotation: 1,
            legend: isDashboard ? undefined : 'transportation',
            legendOffset: 39,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 6,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'count',
            legendOffset: -56,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 99,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 61,
                itemHeight: 31,
                itemOpacity: 0.75,
                symbolSize: 15,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  )
}

export default LineCharts