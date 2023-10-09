import React from 'react'
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { AvatarGroup } from '@mui/material';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import Avatar from '@mui/material/Avatar';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import Button from '@mui/material/Button';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import Chip from '@mui/material/Chip';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';

const Mycomponent = () => {
    const buttonStyle = {
        borderRadius: '50px',
        float: 'right',
        color: 'grey',
        borderColor: 'grey',
        width: '100px',
        height: '30px',
        fontSize: '10px',

    };
     const wifi={
        float:'right',
        width:'15px',
        marginRight:'15px'
     };
    function createData(hires, position, manager, evaluation, check, add) {
        return { hires, position, manager, evaluation, check, add };

    }

    const rows = [
        createData('Penny proud', 'Full stack engineer', "https://jooinn.com/images/male-model-5.jpg", 'FOLLOW UP', 'Dec 11', ''),
        createData('John Elliot', 'Product Designer', "https://th.bing.com/th/id/OIP.KYn_1PEjM-tZLjknxKTiWQHaFN?pid=ImgDet&rs=1", 'SCHEDULED', 'Jan 19', ''),
        createData('Anna Catmine', 'Product Valentina', "https://th.bing.com/th/id/OIP.sZ-LdkYDaVIIe0l5qU0AjgHaEo?w=269&h=180&c=7&r=0&o=5&pid=1.7", 'COMPLETE', 'Dec 16', ''),
    ];
    function createData1(hires, position, manager, evaluation, check, add) {
        return { hires, position, manager, evaluation, check, add }
    }
    const rows1 = [
        createData1('Justin Elliot', 'Product Consultant', "https://jooinn.com/images/male-model-5.jpg", 'SCHEDULED', 'Feb 16', ''),
        createData1('Rachel Green', 'Copywriter', "https://th.bing.com/th/id/OIP.KYn_1PEjM-tZLjknxKTiWQHaFN?pid=ImgDet&rs=1", 'COMPLETE', 'Feb 11', ''),
        createData1('Anna Catmire', 'Copywriter', "https://th.bing.com/th/id/OIP.sZ-LdkYDaVIIe0l5qU0AjgHaEo?w=269&h=180&c=7&r=0&o=5&pid=1.7", 'COMPLETE', 'Feb 11', '')
    
    ];
    return (
        <div>
            <Paper elevation={3} sx={{
                marginTop: '20px',
                paddingLeft: '60px',
                paddingRight: '60px',
                paddingTop: '20px',
                paddingBottom: '20px',
                borderLeft: '10px solid #0C2340',

            }}>
                <LockRoundedIcon className="icons lock" />
                <p className='emp'>Employee Development</p>
                <MoreHorizSharpIcon className='icons sharp' />
                <div>
                    <AvatarGroup max={3} >
                        <Avatar alt="Cindy Baker" src="https://jooinn.com/images/male-model-5.jpg" style={{height:'35px',width:'30px'}}/>
                        <Avatar alt="Remy Sharp" src="https://th.bing.com/th/id/OIP.KYn_1PEjM-tZLjknxKTiWQHaFN?pid=ImgDet&rs=1"style={{height:'35px',width:'30px'}} />
                        <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.sZ-LdkYDaVIIe0l5qU0AjgHaEo?w=269&h=180&c=7&r=0&o=5&pid=1.7"style={{height:'35px',width:'30px'}} />
                        {/* <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" /> */}
                        {/* <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" /> */}
                    </AvatarGroup></div>
                <div className='divider'>
                    <TableChartOutlinedIcon className='icons table' />
                    <select value="Table View" style={{ width: "120px", height: "44px", border: "none", float: "left", marginLeft: "10px", color: 'gray', fontSize: '18px' }} >

                        <option value="Table View" >Table View</option>
                    </select>
                    <Button variant="outlined" startIcon={<ReplyOutlinedIcon />} style={buttonStyle}>
                        Share
                    </Button>
                    <WifiRoundedIcon style={wifi}/>
                </div>
                <br /><br /><br />
                <Divider variant="fullWidth" />
                <div>
                    <TableContainer>
                        <Table  sx={{ minWidth: 650, marginTop: '15px', padding: '30%' }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow border='none'>
                                    <TableCell  align='left' sx={{ color: 'red', fontSize: '20px', width: '300px' }} >New Hires</TableCell>
                                    <TableCell align="center">Position</TableCell>
                                    <TableCell align="center">Manager</TableCell>
                                    <TableCell align="center">Evaluation</TableCell>
                                    <TableCell align="center">Check-in</TableCell>
                                    <TableCell align="right"><AddOutlinedIcon sx={{ color: 'white', backgroundColor: '#87CEFA', borderRadius: '50%' }} /></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow style={{padding:'15px'}} 
                                        key={row.hires}
                                    // sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                                    >
                                        <TableCell  sx={{ borderLeft: "8px solid #FF007F", backgroundColor: 'rgb(233, 233, 233)' }} >{row.hires}<ChatBubbleOutlineRoundedIcon sx={{ float: 'right' }} /></TableCell>
                                        <TableCell sx={{ backgroundColor: 'rgb(233, 233, 233)', width: '100px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}><Chip label={row.position}
                                                sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'lightblue', color: 'blue', width: '150px', float: '' }} />
                                            </div></TableCell>
                                        <TableCell sx={{backgroundColor: 'rgb(233, 233, 233)'}} >
                                            <div style={{ display: "flex", justifyContent: "center" }}><Avatar alt={row.hires} src={row.manager} /></div></TableCell>
                                    
                                            {row.evaluation === 'FOLLOW UP' ?
                                            (<TableCell variant="contained" sx={{ backgroundColor: 'red',textAlign:'center',color:'white',fontSize:'15px' }}>{row.evaluation}</TableCell>
                                                ): row.evaluation === 'SCHEDULED' ? 
                                                (<TableCell variant="contained" sx={{ backgroundColor: '#FF3800',textAlign:'center',color:'white',fontSize:'15px' }}>{row.evaluation}</TableCell>
                                                ) : (<TableCell variant="contained" sx={{ backgroundColor: '#17B169' ,textAlign:'center',color:'white',fontSize:'15px'}}>{row.evaluation}</TableCell>)}
                                        <TableCell align="center" sx={{ backgroundColor: 'rgb(233, 233, 233)' }}>{row.check}</TableCell>
                                        <TableCell align='center' sx={{ backgroundColor: 'rgb(233, 233, 233)', width: '50px' }}>{row.add}</TableCell>
                                        
                                    </TableRow>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                   
                </div>



                <div>
                    <TableContainer>
                        <Table className='custom-font' sx={{ minWidtd: 650, marginTop: '15px' }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow border='none'>
                                    <TableCell align='left' sx={{ color: 'blue', fontSize: '20px', width: '300px' }} ><p>Existing employees</p></TableCell>
                                    <TableCell align="center">Position</TableCell>
                                    <TableCell align="center">Manager</TableCell>
                                    <TableCell align="center">Evaluation</TableCell>
                                    <TableCell align="center">Check-in</TableCell>
                                    <TableCell align="right"><AddOutlinedIcon sx={{ color: 'white', backgroundColor: '#87CEFA', borderRadius: '50%' }} /></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows1.map((row) => (
                                    <TableRow
                                        key={row.hires}
                                    // sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                                    >
                                        <TableCell sx={{ borderLeft: "8px solid rgb(9, 9, 185);", backgroundColor: 'rgb(233, 233, 233)' }} >{row.hires}<ChatBubbleOutlineRoundedIcon sx={{ float: 'right' }} /></TableCell>
                                        <TableCell sx={{ backgroundColor: 'rgb(233, 233, 233)', width: '100px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}><Chip label={row.position}
                                                sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'lightblue', color: 'blue', width: '150px', float: '' }} />
                                            </div></TableCell>
                                        <TableCell sx={{backgroundColor: 'rgb(233, 233, 233)'}}>
                                            <div style={{ display: "flex", justifyContent: "center" }}><Avatar alt={row.hires} src={row.manager} /></div></TableCell>
                                            {row.evaluation === 'SCHEDULED' ?
                                            (<TableCell variant="contained" sx={{ backgroundColor: '#FF3800',textAlign:'center',color:'white',fontSize:'15px' }}>{row.evaluation}</TableCell>
                                                ): row.evaluation === 'SCHEDULED' ? 
                                                (<TableCell variant="contained" sx={{ backgroundColor: '#FF3800',textAlign:'center',color:'white',fontSize:'15px' }}>{row.evaluation}</TableCell>
                                                ) : (<TableCell variant="contained" sx={{ backgroundColor: '#17B169' ,textAlign:'center',color:'white',fontSize:'15px'}}>{row.evaluation}</TableCell>)}
                                        <TableCell align="center" sx={{ backgroundColor: 'rgb(233, 233, 233)' }}>{row.check}</TableCell>
                                        <TableCell align='center' sx={{ backgroundColor: 'rgb(233, 233, 233)', width: '50px' }}>{row.add}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Paper>
            {/* <table>
                <thead>
                    <th>
                        <td>hires</td>
                        <td>position</td>
                        <td>manager</td>
                        <td>evaluation</td>
                    </th>
                </thead>
                        <tbody>
                            {rows.map((row)=>{
                                <tr key={row.hires}>
                                <td>{row.hires}</td>
                                <td>{row.position}</td>
                                <td>{row.manager}</td>
                                <td>{row.evaluation}</td>
                            </tr>
                            })}
                        </tbody>
                    </table> */}
             

        </div>
    )
}

export default Mycomponent