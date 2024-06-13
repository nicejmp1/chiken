import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { chartData2 } from '../../data/chart';
import { useTheme } from '../../context/ThemeContext';

const Chart2 = () => {
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
            }
        }
    };

    const nivoTheme = theme === 'dark' ? darkTheme : lightTheme;
    return (

        <div style={{ width: '650px', height: '500px', margin: '0 auto', backgroundColor: nivoTheme.background }}>
            <ResponsivePie
                data={chartData2}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}

export default Chart2
