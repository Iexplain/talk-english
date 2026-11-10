/* Talk Talk Talk 1 — course data.
   This is the single source of truth for the sidebar and the pager.
   To publish a new lesson: add its `sections` here and set `ready: true`. */

window.TALK_DATA = {
  parts: [
    { id: 'part-1', name: 'Part I', sub: 'Answer These Questions', desc: '看图说话' },
    { id: 'part-2', name: 'Part II', sub: 'Everyday Questions', desc: '日常问答' },
    { id: 'part-3', name: 'Part III', sub: 'Let\'s Practice Making Questions', desc: '主动提问' },
    { id: 'part-4', name: 'Part IV', sub: 'What Do You Think?', desc: '观点表达' }
  ],

  lessons: [
    { no: 1, part: 'part-1', title: 'What Do These Signs Mean?', page: 'p.10',
      href: 'lessons/lesson-01.html', ready: true,
      sections: [
        { id: 'frame',   t: '回答骨架' },
        { id: 'grammar', t: '标志的形状规律' },
        { id: 'example', t: '课本标准答案' },
        { id: 'signs',   t: '十个标志' },
        { id: 'vocab',   t: '重点词汇' },
        { id: 'qa',      t: '老师会问什么' },
        { id: 'fix',     t: '容易犯的错' },
        { id: 'plan',    t: '怎么用这 50 分钟' }
      ] },
    { no: 2,  part: 'part-1', title: 'What Are They For?', page: 'p.12',
      href: 'lessons/lesson-02.html', ready: true,
      sections: [
        { id: 'frame',   t: '回答骨架' },
        { id: 'pattern', t: '用途的五种说法' },
        { id: 'example', t: '课本标准答案' },
        { id: 'items',   t: '十个物品' },
        { id: 'vocab',   t: '重点词汇' },
        { id: 'qa',      t: '老师会问什么' },
        { id: 'fix',     t: '容易犯的错' },
        { id: 'plan',    t: '怎么用这 50 分钟' }
      ] },
    { no: 3,  part: 'part-1', title: 'What Do You Say?', page: 'p.14' },
    { no: 4,  part: 'part-1', title: 'When Do You Say This?', page: 'p.18' },

    { no: 5,  part: 'part-2', title: '“Do You Like” Questions', page: 'p.24' },
    { no: 6,  part: 'part-2', title: '“Do You Think You Are” Questions', page: 'p.32' },
    { no: 7,  part: 'part-2', title: '“What” Questions', page: 'p.38' },
    { no: 8,  part: 'part-2', title: '“Who” Questions', page: 'p.44' },
    { no: 9,  part: 'part-2', title: '“Where” Questions', page: 'p.50' },
    { no: 10, part: 'part-2', title: '“Why” Questions', page: 'p.54' },
    { no: 11, part: 'part-2', title: '“When” Questions', page: 'p.60' },
    { no: 12, part: 'part-2', title: '“How” Questions', page: 'p.64' },
    { no: 13, part: 'part-2', title: '“How Often” Questions', page: 'p.68' },
    { no: 14, part: 'part-2', title: '“How To” Statements', page: 'p.74' },
    { no: 15, part: 'part-2', title: '“Have You Ever” Questions', page: 'p.80' },
    { no: 16, part: 'part-2', title: '“I Wonder If” Questions', page: 'p.86' },

    { no: 17, part: 'part-3', title: 'Make a Question Starting with “What”', page: 'p.88' },
    { no: 18, part: 'part-3', title: 'Make a Question Starting with “When”', page: 'p.94' },
    { no: 19, part: 'part-3', title: 'Make a Question Starting with “How”', page: 'p.98' },
    { no: 20, part: 'part-3', title: 'Make a Question Starting with “Where”', page: 'p.102' },
    { no: 21, part: 'part-3', title: 'Make a Question Starting with “Why”', page: 'p.106' },
    { no: 22, part: 'part-3', title: 'Ask Him', page: 'p.110' },
    { no: 23, part: 'part-3', title: 'Making Topical Questions', page: 'p.118' },

    { no: 24, part: 'part-4', title: 'What’s Happening?', page: 'p.124' },
    { no: 25, part: 'part-4', title: 'What’s Wrong?', page: 'p.130' },
    { no: 26, part: 'part-4', title: '“What Is It?” Questions', page: 'p.136' },
    { no: 27, part: 'part-4', title: 'Qualifications', page: 'p.142' },
    { no: 28, part: 'part-4', title: 'Duty', page: 'p.146' },
    { no: 29, part: 'part-4', title: 'Stereotypes', page: 'p.150' },
    { no: 30, part: 'part-4', title: 'Yes or No!', page: 'p.154' }
  ]
};
