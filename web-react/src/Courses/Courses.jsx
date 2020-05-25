import React from 'react';
import { SideBar } from '../_components'
import { Header } from '../_components'
import { Footer } from '../_components'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.any,
        display: 'flex',
        height: 300,
        color: 'black',
        justifyContent: 'space-around',
    },
    tabs: {
        borderRight: `2px solid ${theme.palette.divider}`,
    },
    media: {
        height: 240,
        width: 301,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="careerPageWrapper">
            <Header pageName='Courses' />
            <SideBar />
            <div className="content">
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >
                <Tab label="Front End" {...a11yProps(0)} />
                <Tab label="Back End" {...a11yProps(1)} />
                <Tab label="React" {...a11yProps(2)} />
                <Tab label="Material UI" {...a11yProps(3)} />
                <Tab label="Angular" {...a11yProps(4)} />
                <Tab label=".NET" {...a11yProps(5)} />
                    </Tabs>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.pluralsight.com/">
            <TabPanel value={value} index={0}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://cdn.dribbble.com/users/511292/screenshots/10076104/media/7793733c17f828a934da73262d7778ec.jpg"
                            title="Front End"
                        />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        PLURALSIGHT
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Pluralsight gives you both—the skills and data you need to succeed.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://alison.com/courses/front-end-languages">
                        <TabPanel value={value} index={0}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://blog.alison.com/wp-content/uploads/2019/01/How_Alison_got_its_Name_-_Image_2_1_1080x675.png"
                                        title="Front End"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Alison
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Free online courses on front end programming languages.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://alison.com/courses/front-end-languages">
                        <TabPanel value={value} index={0}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://onlinelearninginsights.files.wordpress.com/2012/09/edx_logo.jpeg"
                                        title="Front End"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Edx
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Free online courses to learn Front End.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.udacity.com/courses/all">
            <TabPanel value={value} index={1}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://d20vrrgs8k4bvw.cloudfront.net/images/open-graph/udacity.png"
                                        title="Back End"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Udacity
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Can help you with coding, adding more skills, or advancing your career.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
            </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/full-stack-javascript/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROW_ti.6368&utm_content=deal4584&utm_term=_._ag_85479007634_._ad_428734578450_._kw__._de_c_._dm__._pl__._ti_dsa-774930043609_._li_9062299_._pd__._&matchtype=b&gclid=CjwKCAjw2a32BRBXEiwAUcugiFMK_Vketu4n97OMdMBXt5U8X8KwcoeY2P4US9OE0hoJZ_BupH-YghoCoPAQAvD_BwE">
                        <TabPanel value={value} index={1}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                    image="https://melaniegrace.com/wp-content/uploads/2020/05/about-default-1024x538.png"
                                        title="Back End"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Udemy
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Learn full-stack web development using JavaScript.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.barcelonacodeschool.com/barcelona-code-school/javascript-full-stack-online-bootcamp/?gclid=CjwKCAjw2a32BRBXEiwAUcugiBm5RX_CZrb01mwZ62MeTbU7o39xLZcYNud4WsIik3riqjerrq2MORoCxi8QAvD_BwE">
                        <TabPanel value={value} index={1}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://barcelonacodeschool.com/files/pics/online_bootcamp_vr.jpg"
                                        title="Back End"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Code school
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            JavaScript Full-Stack Online Mentored Bootcamp.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/community/courses.html">
            <TabPanel value={value} index={2}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://reactjs.org/logo-og.png"
                                        title="React"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            React courses
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Paid and also free courses.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
      </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/react-redux/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-Cz4nWuk7oyBNPIhmaHaMbw">
                        <TabPanel value={value} index={2}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtG-3IC0-EEIDqw4diEsp9GBLTKXot_LluL_WQmr5qXflxA2-k&usqp=CAU"
                                        title="React"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Udemy react
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Master React v16.6.3 and Redux with React Router, Webpack.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.pluralsight.com/courses/react-js-getting-started?clickid=wiUW0DRaIxyOW4%3AwUx0Mo3EWUki13qw9V1AQwQ0&irgwc=1&mpid=1193463&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1193463&aid=7010a000001xAKZAA2">
                        <TabPanel value={value} index={2}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://i.ytimg.com/vi/T7J4UQEmEY8/maxresdefault.jpg"
                                        title="React"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            React: Getting started
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Learn the React way to build rich interactive UIs.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://material-ui.com/getting-started/learn/">
            <TabPanel value={value} index={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://i.ytimg.com/vi/1aLOxsI_5HY/maxresdefault.jpg"
                                        title="Material ui"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Material ui Courses
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            With practice and some patience, you will soon get the hang of it
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
      </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://bonsaiilabs.com/courseDetail/material-ui-with-react/">
                        <TabPanel value={value} index={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://i.vimeocdn.com/video/856349312.webp?mw=1100&mh=619&q=70"
                                        title="Material ui"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            bonsaiilabs
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Apply Google Material Design with React using Material-UI library
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.nobleprog.com/material-ui-training">
                        <TabPanel value={value} index={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://www.nobleprog.lt/sites/all/themes/common_images/logo/4x3/logo.gif"
                                        title="Material ui"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Material UI Training Courses
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Speeding up the development of well-designed websites
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.pluralsight.com/paths/angular?aid=7010a000002LUv2AAG&promo=&utm_source=non_branded&utm_medium=digital_paid_search_google&utm_campaign=XYZ_EMEA_Dynamic&utm_content=&gclid=CjwKCAjw2a32BRBXEiwAUcugiDrcTQgym8HPwZKIo4iXQNP4VZp8vVOC3LVjhOivQi9IpsaToFXFZBoCUn8QAvD_BwE">
            <TabPanel value={value} index={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWiY0LR_3_4n7BcdWrGkvwmn4G9cfcDfzM63yxLMfne-H5_zNg&usqp=CAU"
                                        title="Angular"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Angular courses
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Helping you to develop complex single-page web applications
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
      </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://angular-university.io/">
                        <TabPanel value={value} index={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://cdn.dribbble.com/users/2673926/screenshots/11183625/media/8a451667fc4ffad373d9b2feb0b828b5.jpg"
                                        title="Angular"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Angular uni
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Courses for All Levels
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.coursera.org/courses?query=angular">
                        <TabPanel value={value} index={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png"
                                        title="Angular"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Coursera
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Angular Courses
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/topic/NET/?gclid=CjwKCAjw2a32BRBXEiwAUcugiC0Yp3mzyUn2wBinJ5dLNKooji02NPR6Qi2jzZKna2Wgn_QUvg0trBoCTKMQAvD_BwE&matchtype=e&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_80687731324_._ad_425510284208_._kw_.net%20course_._de_c_._dm__._pl__._ti_kwd-412769958413_._li_9062299_._pd__._">
            <TabPanel value={value} index={5}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://www.henkla.se/wp-content/uploads/2019/09/dotnet_round.png"
                                        title=".NET"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Udemy
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Refresher on C#
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
            </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.pluralsight.com/courses/becoming-dotnet-developer?aid=7010a000002LUv2AAG&promo=&utm_source=non_branded&utm_medium=digital_paid_search_google&utm_campaign=XYZ_EMEA_Dynamic&utm_content=&gclid=CjwKCAjw2a32BRBXEiwAUcugiCVL5Q-Ae6CRSjhjokDTN1YG1KJVGlL4HPWtDaS7elw1oyIF8A0s7BoCiboQAvD_BwE">
                        <TabPanel value={value} index={5}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://www.pngitem.com/pimgs/m/355-3559230_beginning-programming-with-c-c-sharp-logo-png.png"
                                        title=".NET"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            PLURALSIGHT
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Journey to becoming a .NET developer
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://dotnet.microsoft.com/learn">
                        <TabPanel value={value} index={5}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://hsto.org/webt/fu/vf/mp/fuvfmpkgskh1lrfpkjpuqwkosb4.png"
                                        title=".NET"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Microsoft .NET
                                    </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Tutorials, courses for beginner through advanced .NET developers.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </TabPanel>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}
