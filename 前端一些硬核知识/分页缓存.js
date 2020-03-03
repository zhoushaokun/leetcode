function request(options, callback) {
    var _firstRequest = function (opts, callback) {
        topicRst.getSearchTopicList(opts).then(function (data) {
            callback(data, opts);
        });
    }
    _firstRequest(options, callback);
    return _firstRequest;
}

function List() {
    this.showList = [];
    this.cacheList = [];
    this.pagination = {
        'curPage': 1,  //当前页码（>=1）
        'totalPage': 1,  //总页数
        'pageSize': '11', //每页条目数
        'targetPage': 1, //目标页码
        'totalItems': 0,  //总的条目数
        'secondPageSize': 110, //缓存的条数目
    };
    this.showTopicsOpts = false;
    this.maxCreateTopics = 0;
    this.createdTopicsNum = 0;
    this.editTopic = {};

    // 方便在回调中使用刷新列表
    var updateShowList = function (that) {
        return function () {
            that.pullTopicsList($scope.searchContent.trim(), function () {
                $scope.singleList.cacheList = [];
            });
        };
    }(this);

    var getIconClass = function (creator, normalClass, noAuthClass) {
        if (moduleConst.account.accountType !== "ADMIN") { //不是管理员
            if (!creator) return noAuthClass;
            var creatorId = creator.id;
            if (creatorId !== moduleConst.account.id) return noAuthClass;  //不是自己创建的专题
        }
        return normalClass;
    };

    List.prototype.init = function (accountData) {
        this.createdTopicsNum = accountData.createdTopicNum;
        var isAdmin = accountData.accountType === "ADMIN";
        this.fetchmaxCreateTopics(isAdmin);
        this.pullTopicsList();
    };

    List.prototype.fetchmaxCreateTopics = function (isAdmin) {
        var that = this;
        if (isAdmin) {
            $scope.isAdmin = true;
            that.maxCreateTopics = Infinity;
        } else {
            topicRst.getMaxiumCreationQuantity().then(function (data) {
                that.maxCreateTopics = data.maxTopicQuantity;
            }).catch(function () {
                popLayer.notify("提示", "获取数据失败，请稍后再试！");
            });
        }
    };

    List.prototype.setPagination = function (toSetPagination) {
        for (var key in toSetPagination) {
            this.pagination[key] = toSetPagination[key]
        }
        $scope.singlePagination.update(this.pagination.curPage, this.pagination.totalPage);
    };

    List.prototype.pullTopicsList = function (searchKey, callback) {
        //绑定this
        var renderSearchOpts = function (that) {
            return function (curPage, pageSize) {
                var searchObj = {};
                searchKey && searchKey.length && (searchObj["topicName"] = searchKey);
                searchObj['page'] = curPage || 0;
                searchObj['size'] = pageSize || parseInt(that.pagination.pageSize);
                searchObj['disabled'] = false;
                return searchObj;
            }
        }(this);

        var firstRequestCallback = function (that) {
            return function (data, firstRequestOpts) {
                var firstIndex = firstRequestOpts.page * firstRequestOpts.size;
                var totalPage = Math.ceil(data.totalElements / parseInt(that.pagination.pageSize));

                if (data.content.length === 0) {
                    if (firstIndex - firstRequestOpts.size >= 0) { //前面已经置showList为空
                        that.showList = that.cacheList.slice(firstIndex - firstRequestOpts.size, firstIndex);
                        that.updataPagination(data.totalElements, totalPage, firstRequestOpts.page);
                    }
                } else {
                    angular.forEach(data.content, function (topic, index) {
                        topic.index = firstIndex + index + 1;
                    });
                    that.showList = data.content;
                    that.updataPagination(data.totalElements, totalPage, firstRequestOpts.page + 1);
                }
            };
        }(this);

        var secondRequestCallback = function (that, callback) {
            return function (data, secondRequestOpts) {
                var firstIndex = secondRequestOpts.size * secondRequestOpts.page;
                callback && callback();
                angular.forEach(data.content, function (topic, index) {
                    topic.index = firstIndex + index + 1;
                    that.cacheList[topic.index - 1] = topic;
                });
            };
        }(this, callback);

        var firstPageIndex = this.pagination.curPage - 1, //索引等于页码-1
            firstRequestOpts = renderSearchOpts(firstPageIndex, parseInt(this.pagination.pageSize)),
            secondPageIndex = Math.ceil(this.pagination.curPage * this.pagination.pageSize / this.pagination.secondPageSize) - 1,
            secondRequestOpts = renderSearchOpts(secondPageIndex, this.pagination.secondPageSize);

        this.showList = [];
        request(firstRequestOpts, firstRequestCallback)(secondRequestOpts, secondRequestCallback);
    };

    List.prototype.jumpToPage = function (curPage) {
        this.setPagination({
            curPage: curPage,
        });
        var firstIndex = (curPage - 1) * parseInt(this.pagination.pageSize);
        if (this.cacheList[firstIndex]) {
            this.showList = this.cacheList.slice(firstIndex, firstIndex + parseInt(this.pagination.pageSize));
        } else {
            this.pullTopicsList();
        }
    };

    List.prototype.handleTopicEdit = function (topic) {
        // 不是自己创建的不能修改专题
        if (!getIconClass(topic.creator, true, false)) return;

        var topicInfoToPut = null;
        if (this.editTopic.id) {
            topicInfoToPut = JSON.parse(JSON.stringify(this.editTopic));
            if (topic.name === topicInfoToPut.name) {
                popLayer.tips("修改成功！");
            } else {
                topicRst.modifyTopicInfo(topicInfoToPut).then(function (data) {
                    updateShowList();
                    popLayer.tips("修改成功！");
                }).catch(function (err) {
                    popLayer.notify("提示", "修改失败！");
                });
            }
            if (this.editTopic.id === topic.id) {
                this.editTopic = {};
            } else {
                this.editTopic = JSON.parse(JSON.stringify(topic));
            }
        } else {
            this.editTopic = JSON.parse(JSON.stringify(topic));
        }
    };
    List.prototype.toggleTopicsOpts = function () {
        this.showTopicsOpts = !this.showTopicsOpts;
        if (this.showTopicsOpts) {
            $scope.topicNameClassName = "topicItem-name-lower";
        } else {
            this.editTopic = {};
            $scope.topicNameClassName = "topicItem-name";
        }
    };

    List.prototype.updataPagination = function (totalElements, totalPage, curPage) {
        this.setPagination({
            totalPage: !!totalPage ? totalPage : 1,
            totalItems: totalElements,
            curPage: curPage,
        });
    };
    List.prototype.getEditIconClass = function (creator) {
        return getIconClass(creator, "operation-show-btn", "operation-show-btn topic-noAuth-btn");
    };
    List.prototype.getTopicCardClassName = function (creator) {
        var ownerClass = 'topic-owner';
        var partnerClass = 'topic-partner';
        if (!creator) return partnerClass;
        if (creator.id !== moduleConst.account.id) return partnerClass;  //不是自己创建的专题
        return ownerClass;
    };
    List.prototype.getDeleteIconClass = function (creator) {
        return getIconClass(creator, "topic-delete", "topic-delete topic-noAuth-btn");
    };
    List.prototype.getCreatorIconClass = function (creator) {
        if (!creator) return "fa fa-user fa-fw creator-icon-red"; //creator不存在
        if (creator.id === moduleConst.account.id) {
            return "fa fa-user fa-fw creator-icon-green";
        } else {
            return "fa fa-user fa-fw creator-icon-red";
        }
    };
    List.prototype.getEditOrFinishIcon = function (topicId) {
        if (topicId !== this.editTopic.id) return "fa fa-pencil fa-fw";
        if (topicId === this.editTopic.id) return "fa fa-check fa-fw";
    };
    List.prototype.deleteTopic = function (topic) {
        if (!getIconClass(topic.creator, true, false)) return;

        var id = topic.id;
        var name = topic.name;
        var updateShowList = function (that) {
            return function () {
                that.pullTopicsList($scope.searchContent.trim(), function () {
                    $scope.singleList.cacheList = [];
                });
            };
        }(this);
        var setCreatedTopicsNum = function (that) {
            return function (createdTopicNum) {
                that.createdTopicsNum = createdTopicNum;
            }
        }(this);

        var nameLength = 0;
        for (var i = 0, len = name.length; i < len; i++) {
            if (name.charCodeAt(i) > 127 || name.charCodeAt(i) == 94) {
                nameLength += 2;
            } else {
                nameLength++;
            }
        }
        if (nameLength > 20) {
            name = name.slice(0, 20) + "..."
            nameLength = 20;
        }
        var dialog = popLayer.custom({
            width: 440,
            template: __uri('/tpls/entry/TopicDeleteNote.html'),
            data: name,
            controller: ['$scope', 'popLayer', function (scope, popLayer) {
                scope.topicName = scope.ngDialogData;
                scope.ok = function () {
                    scope.closeThisDialog(true);
                };
                scope.cancel = function () {
                    scope.closeThisDialog(false);
                };
            }],
            showClose: true,
        });
        dialog.closePromise.then(function (data) {
            if (data.value) {
                topicRst.deleteTopic(id).then(function () {
                    updateShowList(id);
                    return userRst.getSelfInfo();
                }).then(function (data) {
                    setCreatedTopicsNum(data.createdTopicNum);
                    popLayer.tips("删除成功！");
                }).catch(function (data) {
                    var defaultNote = "删除失败！请稍后再试！";
                    popLayer.notify('提示', mapHttpResponseToNote.matchResponse(data, defaultNote));
                });
            }
        });
    }
    List.prototype.judgeIfEdit = function (topicId) {
        return (this.editTopic.id === topicId);
    }
}
