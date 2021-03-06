import React, {useState} from 'react';
import Bar from "./Bar/Bar";
import styled from "styled-components";
import colors from "../../constants/colors";
import {makeStyles} from "@material-ui/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Button, Tooltip} from "@material-ui/core";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import {createBranch, findBranchesInNodes} from "../../utils/branch";

const BarsWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding-left: 20px;
`;

const CustomSection = styled.div`
  background-color: white;
  padding: 16px 16px 16px 20px;
  border-radius: 10px;
  height: 580px;
  margin-top: 50px;
  width: 954px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0;
  display: inline-block;
`;

const SectionHeader = styled.div`
  padding: 0px 16px 16px 20px;
  border-bottom: 1px solid ${colors.basic};
  margin-left: -20px;
  margin-right: -16px;
  display: flex;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CustomFlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SettingsButtonIconWrapper = styled(Button)`
  width: 30px;
  height:30px;
  min-width: auto;
  font-size: 11px;
  box-shadow: none;
  border-radius: 6px;
  margin-left: 15px;
`;

const InfoButtonIconWrapper = styled(Button)`
  width: 20px;
  height:20px;
  min-width: auto;
  font-size: 11px;
  box-shadow: none;
  border-radius: 50%;
  margin-left: 15px;
`;

const useStyles = makeStyles(() => ({
    formControl: {
        margin: 1,
        minWidth: 121,
        height: 30,
        border: "none",

        '& .MuiFilledInput-root': {
            borderRadius: 6
        },
        '& > *': {
            color: colors.body
        },
        '& > label' : {
            fontSize: 12,
            color: colors.body,
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            top: -11
        },
        '& .MuiFilledInput-input': {
            padding: "8px 13px 8px 11px"
        },
        '& .MuiFilledInput-underline:after, .MuiFilledInput-underline:before': {
            display: "none"
        },
        '& .MuiSelect-icon': {
            display: "none"
        },
        '& .MuiInputLabel-filled.MuiInputLabel-shrink': {
            transform: "translate(-80px, 20px) scale(0.75)"
        }
    },
    selectEmpty: {
        marginTop: 2,
    },
    selectRoot: {
        fontSize: 12
    }
}));

function BarChart(props) {
    const classes = useStyles();

    const [finalBranch, setFinalBranch] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState('');

    const branches = findBranchesInNodes(props.nodes);

    const handleBranch = (e) => {
        setSelectedBranch(e.target.value)
        const branch = createBranch(props.nodes, e.target.value);
        setFinalBranch(branch);
    }


    return (
        <CustomSection>
            <SectionHeader>
                <CustomFlexDiv>
                    <SectionTitle>Flow dropout per step and service</SectionTitle>
                    <Tooltip title="Info about this section" arrow>
                        <InfoButtonIconWrapper size="small" variant="contained">
                            <InfoOutlinedIcon style={{fontSize: 16}}/>
                        </InfoButtonIconWrapper>
                    </Tooltip>
                </CustomFlexDiv>
                <CustomFlexDiv>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Choose branches</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            className={classes.selectRoot}
                            value={selectedBranch}
                            onChange={(e) => handleBranch(e)}
                        >
                            <MenuItem value=''>
                                <em>None</em>
                            </MenuItem>
                            {branches.map((b, index) =>
                                <MenuItem key={`${b.key}${index}`} value={b.key}>{b.label}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <SettingsButtonIconWrapper size="small" variant="contained">
                        <SettingsOutlinedIcon style={{fontSize: 16}}/>
                    </SettingsButtonIconWrapper>
                </CustomFlexDiv>
            </SectionHeader>
            {finalBranch.length > 0 ? <BarsWrapper>
                {finalBranch.map((node, index) =>
                    <Bar
                        key={index}
                        node={node}
                        lastNode={index < finalBranch.length - 1 ? finalBranch[index + 1].value : null}
                    />
                )}
            </BarsWrapper> : <h6>Please select a branch</h6>}
        </CustomSection>
    )
}

export default BarChart;