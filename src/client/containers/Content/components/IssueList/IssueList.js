import './IssueList.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getOpenIssues } from '../../../../api/gitlab';
import { STATUS, SORT_TYPE } from '../../../../constants';
import { List, Skeleton, Avatar, Icon } from 'antd';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            loadingState: STATUS.FETCHING,
            sortType: SORT_TYPE.UPVOTES,
        };
        this.updateIssues = this.updateIssues.bind(this);
        this.sortIssues = this.sortIssues.bind(this);
    }

    componentDidMount() {
        this.updateIssues();
    }

    componentDidUpdate(prevProps) {
        if (this.props.projectId !== prevProps.projectId) {
            this.updateIssues();
        }
    }

    sortIssues() {
        const sortedArr = this.state.issues;
        switch (this.state.sortType) {
            case SORT_TYPE.UPVOTES:
                sortedArr.sort((a, b) => a.upvotes === b.upvotes ? 0 : +(a.upvotes < b.upvotes) || -1);
                break;
            default:
                break;
        }
        this.setState({ issues: sortedArr });
    }

    updateIssues() {
        this.setState({ loadingState: STATUS.FETCHING });
        getOpenIssues(this.props.projectId).then(result => {
            this.setState({ issues: result, loadingState: STATUS.FETCHED }, () => this.sortIssues());
            console.log(result);
        });
    }

    render() {
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8 }} />
                {text}
            </span>
        );

        return (
            <React.Fragment>
                <div className='issue_list_header'>

                </div>
                <hr />
                <List
                    loading={this.state.loadingState === STATUS.FETCHING}
                    size='large'
                    itemLayout="vertical"
                    dataSource={this.state.issues}
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 8,
                    }}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<IconText key='1' type='like' text={item.upvotes} />, <IconText key='2' type='dislike' text={item.downvotes} />, <IconText key='2' type='message' text='23' />]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.author.avatar_url} alt={item.author.name} />}
                                title={item.title.slice(0, 90) + '...'}
                                description={item.author.name}
                            />
                            {item.description.slice(0, 120) + '...'}
                        </List.Item>
                    )}
                />
            </React.Fragment>
        );
    }
}

IssueList.propTypes = {
    projectId: PropTypes.string.isRequired,
};

export default IssueList;
