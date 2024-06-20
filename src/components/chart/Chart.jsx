import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import chartData from '../../data/chart';
import { useTheme } from '../../context/ThemeContext';

const Chart = () => {
    const { theme } = useTheme();

    const lightTheme = {
        axis: {
            domain: {
                line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                },
            },
            legend: {
                text: {
                    fill: "#333333",
                },
            },
            ticks: {
                line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                },
                text: {
                    fill: "#333333",
                },
            },
        },
        grid: {
            line: {
                stroke: "#dddddd",
                strokeWidth: 1,
            },
        },
    };

    const darkTheme = {
        axis: {
            domain: {
                line: {
                    stroke: "#fff",
                    strokeWidth: 1,
                },
            },
            legend: {
                text: {
                    fill: "#fff",
                },
            },
            ticks: {
                line: {
                    stroke: "#fff",
                    strokeWidth: 1,
                },
                text: {
                    fill: "#fff",
                },
            },
        },
        grid: {
            line: {
                stroke: "#444444",
                strokeWidth: 1,
            },
        },
        legends: {
            text: {
                fill: "#fff",
            },
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1,
                        itemBackground: '#444',
                        itemTextColor: '#fff'
                    }
                }
            ]
        },
        tooltip: {
            container: {
                background: '#333333',
                color: '#ffffff',
            }
        }
    };

    const nivoTheme = theme === 'dark' ? darkTheme : lightTheme;

    return (
        <div style={{ width: '650px', height: '500px', margin: '0 auto', backgroundColor: nivoTheme.background }}>
            <ResponsiveBar
                data={chartData}
                keys={[
                    '교촌',
                    'BBQ',
                    'BHC',
                    '굽네',
                    '60계',
                    '푸라닭',
                    '맘스터치',
                    '네네치킨',
                    '기타',
                    '잘모름'
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                layout="horizontal"
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: theme === 'dark' ? 'dark2' : 'nivo' }}
                theme={nivoTheme}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '치킨 프랜차이즈 선호도',
                    legendPosition: 'middle',
                    legendOffset: 40,
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: -40,
                    truncateTickAt: 0
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1,
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />
        </div>
    );
}

export default Chart;
