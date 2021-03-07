import React from 'react';
import styled from "styled-components";
import colors from "../../../constants/colors";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const BarLabel = styled.div`
  white-space: nowrap;
  transform: rotate(-90deg);
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${colors.body};
`;

const BarPercent = styled.h2`
  color: ${colors.body};
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-top: 20px;
  margin-bottom: 0;
`;

const CustomArrowDownIcon = styled(ArrowDownwardIcon)`
  border: 2px solid ${colors.body};
  border-radius: 50%;

`;

const IconWrapper = styled.div`
  background-color: ${colors.mediumGray};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const BarGrid = styled.div`
  display: flex;
  align-items: center;
`;

const IconLabel = styled.h6`
  margin: 10px 0 0 0 ;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${colors.lighGray};
`;

const BarGridColumn = styled.div`
  min-height: 460px;
  display: flex;
  flex-direction: column;
  margin: 0 15px 20px 0;
  align-items: center;
  justify-content: center;
`;

const BarLineWrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
`;

const BarLine = styled.div`
  width: 80px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Bar (props) {
    const {node, lastNode} = props;
    const barLabel = node.label;
    const barValue = node.value;

    const decrease = node.value - lastNode;
    const decreasePercentage = (decrease / node.value * 100) * (-1);


    return (
        <div>
            <BarGrid>
                <BarGridColumn>
                    <BarLineWrapper>
                        <BarLine
                            style={{
                                height: 400 * (node.value / 100),
                                backgroundColor: colors[node.type.toLowerCase()]
                            }}
                            size={10}
                        >
                            <BarLabel>{barLabel}</BarLabel>
                        </BarLine>
                    </BarLineWrapper>
                    <BarPercent>{barValue}%</BarPercent>
                </BarGridColumn>
                {lastNode && <BarGridColumn>
                    <IconWrapper>
                        <CustomArrowDownIcon style={{fontSize: 16}}/>
                    </IconWrapper>
                    <IconLabel>{decreasePercentage.toFixed(1)}%</IconLabel>
                </BarGridColumn>}
            </BarGrid>
        </div>
    )
}

export default Bar;